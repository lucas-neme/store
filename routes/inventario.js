const express = require('express');
const router = express.Router();
const db = require('../database');

// Rota para listar todos os itens do inventário
router.get('/inventario', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM inventario');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar itens do inventário' });
  }
});

// Rota para criar um novo item no inventário
router.post('/inventario', async (req, res) => {
  const { nome, quantidade, valor } = req.body;
  try {
    const result = await db.query('INSERT INTO inventario (nome, quantidade, valor) VALUES ($1, $2, $3) RETURNING *', [nome, quantidade, valor]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar item no inventário' });
  }
});

module.exports = router;
