const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Message = require('../models/Message');
const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy_key" // Ensure you have this in your .env file
});

// GET : Récupérer tous les projets pour les afficher sur le site
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST : Recevoir un message du formulaire de contact
router.post('/contact', async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        await newMessage.save();
        res.status(201).json({ message: "Message envoyé avec succès !" });
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de l'envoi" });
    }
});

// POST : Discuter avec l'agent IA
router.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).json({ error: "Le message est requis" });
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Vous êtes un assistant IA utile sur le site web d'un développeur appelé Julio. Vous répondez aux questions des visiteurs concernant Julio ou d'autres sujets de manière polie et concise." },
                { role: "user", content: userMessage }
            ],
        });

        const aiResponse = response.choices[0].message.content;
        res.json({ reply: aiResponse });
    } catch (error) {
        console.error("Erreur avec l'API OpenAI:", error);
        res.status(500).json({ error: "L'IA ne peut pas répondre pour le moment." });
    }
});

module.exports = router;