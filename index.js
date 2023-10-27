
const server = require('./config/serve')

require('./config/database')

server.listen(server.get('port'))

