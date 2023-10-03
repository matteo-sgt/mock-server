const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for "/tvod/encode"
server.post('/tvod/encode', (req, res) => {
    console.log('tvod/encode');
    console.log(req.body);
    res.status(200).json({
        "result": "OK",
        "redirectURL": "https://mipendpoint.it?t=ebcjwe"
    });
});

// Custom route for "/tvod/decode"
server.get('/tvod/decode', (req, res) => {
    console.log('tvod/decode');

    // action sono le varie casistiche che vengono scatenate nel client
    res.status(200).json({
        "result": "OK",
        "action": "register-paypal",
        // "action": "oneshot-register-paypal",
        // "action": "register-credit-card",
        // "action": "sca-credit-card",
        // "action": "oneshot-register-credit-card",
        // "action": "oneshot-credit-card",
        // "redirectURL": "https://mipendpoint.it?t=ebcjwe"
        "account": "email@email.com"
    });
});

// Custom route for "/tvod/register"
server.get('/tvod/register', (req, res) => {
    res.status(200).json({
        "result": "OK",
        // "redirectURL": "https://google.it",
        "shopLogin": "R0VTUEFZOTUxOTYjI0VzZXJjZW50ZSBUZXN0IGRpIFByYXBhcGFwcG8jIzE1LzA2LzIwMjMgMTc6MDc6MTQ=",
        "account": "email@email.it",
        "encResult": "LDASDJJD323njhy323"
    });
});

// Custom route for "/tvod/confirmregister"
server.post('/tvod/confirmregister', (req, res) => {
    res.status(200).json({
        "result": "OK",
        "redirectURL": "https://mipendpoint.it?t=ebcjwe"
    });
});

// Custom route for "/tvod/purchase"
server.get('/tvod/purchase', (req, res) => {
    res.status(200).json({
        "result": "OK",
        "shopLogin": "R0VTUEFZOTUxOTYjI0VzZXJjZW50ZSBUZXN0IGRpIFByYXBhcGFwcG8jIzE1LzA2LzIwMjMgMTc6MDc6MTQ=",
        "account": "email@email.it",
        "encResult": "LDASDJJD323njhy323"
    });
});

// Custom route for "/tvod/confirmregister"
server.post('/tvod/confirmpurchase', (req, res) => {
    res.status(200).json({
        "result": "KO",
        "redirectURL": "https://mipendpoint.it?t=ebcjwe"
    });
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});
