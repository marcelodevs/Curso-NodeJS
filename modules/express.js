const express = require("express");
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Executa antes de qlq coisa
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
});

// Redenrizar HTML
app.get('/home', async (req, res) => {
    const users = await UserModel.find({});

    res.render("index", { users });
});

/* CRUD */

// Select

app.get('/user', async (req, res) => {
    try
    {
        const users = await UserModel.find({/* nome: "Felipe" <- filtro */ });
        res.status(200).json(users);
    } catch (error)
    {
        res.status(500).send(error.message)
    }
});

// Select por id

app.get('/user/:id', async (req, res) => {
    try
    {
        const id = req.params.id;

        const user = await UserModel.findById(id);

        return res.status(200).json(user);
    } catch (error)
    {
        res.status(500).send(error.message);
    }
});

// Insert

app.post('/user', async (req, res) => {
    try
    {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error)
    {
        res.status(201).send(error.message);
    }
});

// Update

// O Put é usado para mudar o registro completo
// Patch é usado para mudar o registro parcialmente

app.patch('user/:id', async (req, res) => {
    try
    {
        const id = req.params.id;

        const user = await UserModel.findByIdAndUpdate(id, res.body, { new: true });

        res.status(200).json(user);
    } catch (error)
    {
        res.status(500).send(error.message);
    }
});

// Delete

app.delete('user/:id', async (req, res) => {
    try
    {
        const id = req.params.id;

        const user = await UserModel.findByIdAndRemove(id);

        res.status(200).json(user);
    } catch (error)
    {
        res.status(500).send(error.message);
    }
});

/* FIM DO CRUD */

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
