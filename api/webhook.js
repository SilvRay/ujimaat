const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Désactive le body parser de Vercel pour lire le raw body (requis par Stripe)
export const config = {
  api: { bodyParser: false },
};

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type === "payment_intent.succeeded") {
    const { name, email, amount } = {
      name: event.data.object.metadata.name,
      email: event.data.object.metadata.email,
      amount: (event.data.object.amount / 100).toFixed(2) + "€",
    };
    // Paiement confirmé — à inscrire manuellement sur LearnWorlds
    console.log(`✅ Paiement reçu : ${name} <${email}> — ${amount}`);
  }

  res.json({ received: true });
};
