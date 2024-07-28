const mongoose  = require("mongoose")

const connectDB = async() => {
    const connecting = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected to ${connecting.connection.host} on ${connecting.connection.port} `)
}

module.exports = connectDB