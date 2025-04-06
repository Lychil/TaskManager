const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');

const app = express();
app.use(cors());

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api`);
});