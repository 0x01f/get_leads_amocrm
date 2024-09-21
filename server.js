// server.js
const cors_proxy = require('cors-anywhere');
const host = '0.0.0.0';
const port = 8080;

cors_proxy.createServer({
    originWhitelist: [], // Разрешить все источники
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log(`CORS Anywhere работает на ${host}:${port}`);
});