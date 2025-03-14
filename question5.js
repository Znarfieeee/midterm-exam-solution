const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 3000;

const sequelize = new Sequelize('intprog', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'users',
});

sequelize.sync();

app.get('/users', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Error: ", err });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});