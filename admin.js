const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["https:<PRIVATE_IP>:9092"]
});

async function init() {
    const admin = kafka.admin();
    admin.connect();
}
