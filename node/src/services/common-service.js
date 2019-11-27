class CommonService {
  constructor() { }

  default() {
    return new Promise((res, rej) => {
      res('Success!')
    });
  }
}

module.exports = new CommonService();