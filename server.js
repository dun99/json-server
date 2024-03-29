const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// server.use(router)
// server.listen(3004, () => {
//   console.log('JSON Server is running')
// })
const port = process.env.PORT || 3004;
server.use(middlewares);
server.use(router);
server.listen(port);