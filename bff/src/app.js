const cors = require('cors');
const express = require('express');
const entityRoutes = require('./routes/entityRoutes');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(healthRoutes);
app.use(entityRoutes);

module.exports = app;
