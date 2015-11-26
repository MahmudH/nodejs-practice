var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) {
    var datetime = new Date();
    console.log('Request: ' + datetime + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
}

module.exports = middleware;
