import database from "./singleton.js";

console.log(database.connectDB())

setTimeout(
    () => console.log(database.disconnectDB())
    , 4000
)