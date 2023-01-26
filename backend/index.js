const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/api/user/update', (req, res) => {
	const { name, email } = req.body;
	setTimeout(() => {
		res.status(200).json({ name, email });
	}, 3000);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))