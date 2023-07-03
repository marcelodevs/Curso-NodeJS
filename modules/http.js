const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === "/home")
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home page</h1>");
    }

    if (req.url === "/user")
    {
        const user = [
            {
                nome: 'Marcelo',
                senha: '1234'
            },
            {
                nome: 'Gaby',
                senha: '12345'
            },
            {
                nome: 'Mara',
                senha: '123456'
            },
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
