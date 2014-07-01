var Parse = require('parse').Parse;

var Post = Parse.Object.extend('Post', {}, {

  getAll: function(cb) {
    var query = new Parse.Query(Post);
    query.find({
      success: function(obj) {
        cb(obj);
      },
      error: function(obj, err) {
        console.error('getAll() error', obj, err);
      }
    });
  }
});

module.exports = Post;