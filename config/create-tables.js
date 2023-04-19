const { query } = require('./database');

async function createTables() {
  try {
    // Criação da tabela Funcionarios
    await query(`
      CREATE TABLE IF NOT EXISTS Funcionarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        data_nascimento DATE NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        data_admissao DATE NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        cpf VARCHAR(11) UNIQUE NOT NULL,
        foto BYTEA
      );
    `);

    // Criação da tabela Clientes
    await query(`
      CREATE TABLE IF NOT EXISTS Clientes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        data_nascimento DATE NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        cpf VARCHAR(11) UNIQUE NOT NULL
      );
    `);

    // Criação da tabela Inventarios
    await query(`
      CREATE TABLE IF NOT EXISTS Inventarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        quantidade INTEGER NOT NULL,
        valor DECIMAL(10,2) NOT NULL
      );
    `);

    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  }
}

createTables();

