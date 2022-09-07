//boilerplate

const express = require('express')
const cors = require('cors')

const app = express();

//const controller = require('../../controller')

const {getAllHouses, deleteHouses, createHouses, updateHouses} = require('./controller')



app.use(express.json());
app.use(cors());

app.get('/api/houses', getAllHouses)
app.delete('/api/houses/:id', deleteHouses)
app.post('/api/houses', createHouses)
app.put('/api/houses/:id', updateHouses)



app.listen(4004, () => {console.log('Listening on port 4004')})