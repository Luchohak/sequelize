const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://admin:admin123 @cluster0.ibi4wvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then((result) => console.log("Connected!"))
  .catch((err) => console.log(err));
