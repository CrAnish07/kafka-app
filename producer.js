const { kafka } = require("./client")
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function init(){
    const producer = kafka.producer();
    await producer.connect()
    console.log("Producer Connected")

    rl.setPrompt("> ");
    rl.prompt();

    rl.on("line", async function(line) {
        const [ridername, location] = line.split(" ")
        await producer.send({
            topic: "rider-updates",
            messages: [
                {
                partition: location.toLowerCase() === "north" ? 0 : 1,
                key: "location-updates",
                value: JSON.stringify({name: ridername, location})
                },
            ],
        }); 
    }).on("close", async () => {
        await producer.disconnect();
    });
}

init();