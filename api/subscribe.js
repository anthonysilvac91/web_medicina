// api/subscribe.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body || {};

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const listId = parseInt(process.env.BREVO_LIST_ID, 10);

    const r = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,   // Si ya existe, actualiza
        listIds: [listId],     // Lo toma de tu variable de entorno
      }),
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error("Brevo error:", txt);
      return res.status(r.status).json({ error: "Brevo error", detail: txt });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Server error:", e);
    return res.status(500).json({ error: "Internal server error" });
  }
}
