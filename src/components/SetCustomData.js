import {app} from "../App";

const setCustomData = async () => {
    const mongo = app.currentUser.mongoClient("mongodb-atlas");
    const collection = mongo.db("users").collection("user_data");
    await collection.insertOne( {id: app.currentUser.id})

}

export default setCustomData