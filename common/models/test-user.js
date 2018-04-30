module.exports = function(User) {
  User.test = function(data, cb) {
    process.nextTick(function() {
      cb(null, data);
    });
  };
};
