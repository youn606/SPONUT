const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend OK ✔" });
});
app.get("/api/food", async (req, res) => {
    const query = req.query.q;

    const url = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${process.env.API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: "Erreur API nutrition" });
    }
});

app.get("/api/food", async (req, res) => {
    const query = req.query.q;

    const url = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${process.env.API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: "Erreur API" });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});