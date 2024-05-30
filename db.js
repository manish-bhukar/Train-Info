const mongoose = require('mongoose')

// main().catch(err => console.log(err));

const connectdb=async function () {
const db = await mongoose.connect(
  "mongodb://localhost:27017/train"
);
  console.log(`db connected ${db.connection.host}`);
}
module.exports=connectdb