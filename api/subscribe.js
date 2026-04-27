export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/YOUR_PUB_ID/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true
      })
    }
  );

  const data = await response.json();
  return res.status(200).json(data);
}
