import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
