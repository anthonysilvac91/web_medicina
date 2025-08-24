// api/subscribe.js  (CommonJS, funciona en Vercel sin tocar tu package.json)
const mailchimp = require('@mailchimp/mailchimp_marketing');
const crypto = require('crypto');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,       // ej: xxxxx-us21
  server: process.env.MAILCHIMP_SERVER_PREFIX, // ej: "us21"
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let email = '';
  try { ({ email } = JSON.parse(req.body || '{}')); } catch {}
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const listId = process.env.MAILCHIMP_AUDIENCE_ID;

  try {
    // Lo más simple: alta directa (single opt-in). Si prefieres double opt-in, cambia a 'pending'
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed', // <-- usa 'pending' para double opt-in
      tags: ['newsletter', 'medhogar'],
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    // Si ya existe, lo tratamos como éxito y activamos la tag
    if (err?.status === 400 && err?.response?.body?.title === 'Member Exists') {
      const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
      await mailchimp.lists.updateListMemberTags(listId, hash, {
        tags: [{ name: 'newsletter', status: 'active' }],
      });
      return res.status(200).json({ ok: true, already: true });
    }
    console.error(err);
    return res.status(500).json({ error: 'Mailchimp error' });
  }
};
