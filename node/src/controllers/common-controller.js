const service = require('../services/common-service');
class CommonController {
  constructor() { }

  default(req, res) {
    service
      .default()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  }
}
module.exports = new CommonController();