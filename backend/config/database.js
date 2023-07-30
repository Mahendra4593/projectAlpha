const mongoose = require('mongoose')

// Returning database component
const connectDatabase = () => {
    mongoose
    .connect("mongodb+srv://abcde:abcde@cluster0.yb1bgwq.mongodb.net/akshatC?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, family: 4,})
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDatabase