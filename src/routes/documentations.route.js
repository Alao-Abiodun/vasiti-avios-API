const { Router } = require('express');
const swaggerUi = require('swagger-ui-express'),
      swaggerDocument = require('../../swagger.json');

const router = Router();

router.use('/', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;