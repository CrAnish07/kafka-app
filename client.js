const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ["https:<PRIVATE_IP>:9092"]
});