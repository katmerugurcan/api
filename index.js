const express = require('express');
const api = require('./scripts/Routes/users');
const app = express();

app.use(express.json({ extended: false }));
app.use('/api', api);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`http://localhost:${PORT} adresinden gelen istekler dinleniyor...`);
});