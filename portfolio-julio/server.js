const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Connexion MongoDB (Remplacez par votre lien MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_julio')
    .then(() => console.log("✅ Connecté à la base de données"))
    .catch(err => console.error("❌ Erreur DB:", err));

// Import des routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));