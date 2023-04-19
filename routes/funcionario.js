const express = require('express');
const router = express.Router();
const db = require('../database');

// Rota para listar todos os funcionários
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM funcionarios');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar funcionários' });
  }
});

// Rota para cadastrar um novo funcionário
router.post('/', async (req, res) => {
  const { nome, data_nascimento, telefone, email, data_admissao, endereco, cpf } = req.body;
  try {
    const { rows } = await db.query('INSERT INTO funcionarios (nome, data_nascimento, telefone, email, data_admissao, endereco, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [nome, data_nascimento, telefone, email, data_admissao, endereco, cpf]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar funcionário' });
  }
});

// Rota para atualizar um funcionário
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, data_nascimento, telefone, email, data_admissao, endereco, cpf } = req.body;
  try {
    const { rows } = await db.query('UPDATE funcionarios SET nome=$1, data_nascimento=$2, telefone=$3, email=$4, data_admissao=$5, endereco=$6, cpf=$7 WHERE id=$8 RETURNING *', [nome, data_nascimento, telefone, email, data_admissao, endereco, cpf, id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar funcionário' });
  }
});

// Rota para deletar um funcionário
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM funcionarios WHERE id=$1', [id]);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar funcionário' });
  }
});

module.exports = router;
