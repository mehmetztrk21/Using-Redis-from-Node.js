const redis = require("redis");
const client = redis.createClient({
    legacyMode: true
});

client.on("error", error => {
    console.error(error);
});

(async () => {
    await client.connect();
})();

client.set("user_name", "mehmet", (error, message) => {
    if (error)
        console.error(error);
    console.log(message);
});

client.get("user_name", (error, message) => {
    if (error)
        console.error(error)
    console.log(message);
});

client.del("user_name", (error, message) => {
    if (error)
        console.error(error);
    console.log(message);
})

client.exists("user_name", (error, message) => {
    if (error)
        console.error(error);
    console.log(message);
});

client.append("user_name", "mehmet", (error, message) => {
    if (error)
        console.error(error);
    console.log(message);
});

client.append("user_name", " öztürk", (error, message) => {
    if (error)
        console.error(error);
    console.log(message);
});

client.get("user_name", (error, message) => {
    if (error)
        console.error(error)
    console.log(message);
});

client.on("message", (channel, message) => {
    console.log(`${channel} sending this message: ${message}`);
});

client.subscribe("my_channel");

