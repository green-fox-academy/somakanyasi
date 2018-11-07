'use strict';

const routes = require('./routes/routes');
const port = 3000;

routes.listen(port, () => {
  console.log('Server running on port %d', port);
});
