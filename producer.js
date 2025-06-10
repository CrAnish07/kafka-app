const { kafka } = require("./client")

async function init(){
    const producer = kafka.producer();
    await producer.connect()
    console.log("Producer Connected")

    await producer.send({
        topic: "rider-updates",
        messages: [
            {
            partition: 0,
            key: "location-updates",
            value: JSON.stringify({name: "Vikash Kumar", loc: "SOUTH"})
            },
        ],
    });

    await producer.disconnect();
}

init();