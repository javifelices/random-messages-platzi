const messages = ['Javi', 'Berta', 'Francisco', 'Victoria', 'Pedro', 'Carmen', 'Rosa', 'Juan', 'Raúl', 'Ana'];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
