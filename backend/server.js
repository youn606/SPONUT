const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("SPONUT API OK 🚀");
});

app.get("/api/food", async (req, res) => {
    const query = req.query.q;

    const url = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${process.env.API_KEY}`;

    try {
        const response = await fetch(url);

        const text = await response.text();

        console.log("STATUS =", response.status);

        if (!response.ok) {
            return res.status(500).json({
                error: "API error",
                status: response.status,
                body: text
            });
        }

        const data = JSON.parse(text);

        res.json(data);

    } catch (err) {
        console.log("❌ ERROR =", err.message);
        res.status(500).json({ error: "Erreur serveur nutrition" });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});