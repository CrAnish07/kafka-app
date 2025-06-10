const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["https://192.168.29.31:9092"]
});

async function init() {
    const admin = kafka.admin();
    admin.connect();
}