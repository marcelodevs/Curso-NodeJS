const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try
    {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodedicasparadevs.5ufvmox.mongodb.net/database?retryWrites=true&w=majority`
        );
        console.log('Conexão ao banco de dados ocorrida com sucesso!');
    } catch (error)
    {
        console.log('Ocorreu um erro ao conectar-se com o banco de dados:', error);
    }
};

module.exports = connectToDataBase;
