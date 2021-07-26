// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

const Cars = require('./cars-model')

// [GET] /api/cars *** in server.js we have /api/cars and so we don't need to declare it here*** (Returns an array cars.)
router.get('/', async (req, res) => {

    Cars.getAll()
        .then(cars => {
            console.log(cars)
            res.status(200).json(cars)
        }).catch(err => {
            res.status(500).json({ message: "The cars information could not be retrieved" })
        })
})

// [GET] /api/cars:id (Returns the car object with the specified id)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.findById(id)
        .then(car => {
            if (!car) {
                res.status(404).json({ message: "The car with the specified ID does not exist" })
            } else {
                res.status(200).json(post)
            }
        })
        .catch(err => {
            res.status(500).json({ message: "The car information could not be retrieved" })
        })
})

// [POST] /api/cars (Creates a car using the information sent inside the request body.)
router.post('/', async (req, res) => {
    const data = req.body
    if (!data.vin || !data.make || !data.model || !data.mileage) {
        res.status(400).json({ message: "Please provide vin, make, model, and mileage for the car" })
    } else {
        Cars.create(data)
            .then(newCar => {
                res.status(201).json(newCar)
            })
            .catch(err => {
                res.status(500).json({ message: "There was an error while saving the car to the database" })
            })
    }

})

module.exports = router;