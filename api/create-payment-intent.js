const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 36000, // 360€ en centimes
      currency: "eur",
      metadata: { name: name || "", email: email || "" },
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("create-payment-intent error:", err.message);
    res.status(500).json({ error: err.message });
  }
};
