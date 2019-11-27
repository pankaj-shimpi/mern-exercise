const service = require('../services/user-service');
class CommonController {
  constructor() { }

  getUsers(req, res) {
    service
      .getUsers()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  }

  getUser(req, res) {
    const userId = req.params.id;
    service
      .getUser(userId)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  }

  createUser(req, res) {
    let userDetails = req.body;
    service
      .createUser(userDetails)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  }
}

module.exports = new CommonController();
