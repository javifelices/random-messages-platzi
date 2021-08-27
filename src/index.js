const messages = ['Javi', 'Berta', 'Francisco', 'Victoria', 'Pedro', 'Carmen'];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
