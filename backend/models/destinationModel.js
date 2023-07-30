const mongoose = require('mongoose');
const {Schema} = mongoose

const destinations = new Schema({
    name:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    landmarks:[
        {
            type: String,
            required: true
        }
    ],
    activities:[
        {
            name:{
                type: String,
                required: true
            }
        }
    ],
    avgExpenses:{
        type: Number,
        required: true
    },
    weather:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Destinations', destinations);
