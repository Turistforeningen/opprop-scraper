var request = require('request');

module.exports = function(title, cb) {
  request('http://www.opprop.net/signatures/' + title, function(error, response, body) {
    if (error) return cb(error);
    if (body && response.statusCode === 200) {
      match = body.match(/signatureAmount = (\d+);/);
      if (match[1]) {
        return cb(null, parseInt(match[1]));
      } else {
        return cb(null, 0);
      }
    } else {
      return cb(new Error('No content'));
    }
  });
}

