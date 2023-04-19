const express = require('express');
const router = express.Router();
const db = require('../database');

// Endpoint para buscar todos os clientes
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM clientes');
    res.send(rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Endpoint para adicionar um novo cliente
router.post('/', async (req, res) => {
  const { nome, email, telefone, endereco } = req.body;
  try {
    await db.query(
      'INSERT INTO clientes (nome, email, telefone, endereco) VALUES ($1, $2, $3, $4)',
      [nome, email, telefone, endereco]
    );
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Endpoint para atualizar um cliente existente
router.put('/:id', async (req, res) => {
  const { nome, email, telefone, endereco } = req.body;
  const id = parseInt(req.params.id);
  try {
    await db.query(
      'UPDATE clientes SET nome=$1, email=$2, telefone=$3, endereco=$4 WHERE id=$5',
      [nome, email, telefone, endereco, id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Endpoint para deletar um cliente existente
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await db.query('DELETE FROM clientes WHERE id=$1', [id]);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
