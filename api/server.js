import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());           // 👈 permite peticiones desde el frontend
app.use(express.json());   // 👈 habilita JSON en req.body

// === Google Reviews ===
const API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.PLACE_ID;

app.get("/api/reviews", async (req, res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data.result.reviews || []);
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
});

// === Brevo Subscribe ===
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email requerido" });

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(process.env.BREVO_LIST_ID, 10)],
      }),
    });

    const data = await response.json();

    if (response.ok) {
      res.json({ success: true, data });
    } else {
      res.status(400).json({ error: data });
    }
  } catch (error) {
    console.error("Error al suscribir:", error);
    res.status(500).json({ error: "Error al suscribir" });
  }
});

// === Iniciar servidor ===
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


//se agrega solo por add