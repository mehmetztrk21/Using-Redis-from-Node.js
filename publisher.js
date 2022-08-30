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

client.publish("my_channel", "send on node.js dssadds", (error, number) => {
    if (error)
        console.error(error);
    console.log(`Message sending ${number} users`);
    process.exit(0);
})