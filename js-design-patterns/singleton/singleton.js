let instance;

class DBConnection {
    constructor(uri) {
        if (instance) {
            throw new Error("There must be only one instance.")
        }

        this.uri = uri
        instance = this;
    }

    connectDB() {
        console.log(`Trying to connect at the database of the URL provided: ${this.uri}...`)

        setTimeout(() =>
            console.log(`DB connected at ${this.uri}.`)
            , 2000)
    }

    disconnectDB() {
        console.log(`Disconnecting from the database...`)

        setTimeout(() => {
            console.log(`Disconnection sucessful.`)
        }, 2000)
    }
}

const database = Object.freeze(new DBConnection("https://127.0.0.1:5000/"));

export default database