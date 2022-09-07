
let houses = require('./db.json')
let houseID = 4;


module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouses: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouses: (req, res) => {
        const {address, price, imgURL} = req.body;

        let newHouse = {
            address,
            price: +price,
            imgURL,
            id: houseID
        }
        console.log(newHouse);
        houses.push(newHouse)
        houseID++;
        res.status(200).send(houses)
    },
    updateHouses: (req, res) => {
        const {type} = req.body;
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus' && houses[index].price > 1){
            houses[index].price -=10000
            res.status(200).send(houses)
        }else if(type === 'plus' && houses[index].price < 10000000 ){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Invalid price range!')
        }
    }
}