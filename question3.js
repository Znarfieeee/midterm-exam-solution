const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req,res) => {
    return json({ message: 'Express is working! Mari Franz H. Espelita' })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})