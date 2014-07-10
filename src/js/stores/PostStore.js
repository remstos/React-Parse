var Parse = require('parse').Parse;
var Post = Parse.Object.extend('Post', {}, {
  
  getById: function(objectId, callback) {
    var query = new Parse.Query(Post);
    query.get(objectId, {
      success: function(post) {
        callback(post);
      },
      error: function(obj, err) {
        console.error('getById() error', obj, err);
      }
    });
  },
  
  getByName: function(name, callback) {
    var query = new Parse.Query(Post);
    query.equalTo("name",name);
    query.find({
      success: function(posts) {
        var post = posts[0];
        callback(post);
      },
      error: function(obj, err) {
        console.error('getByName() error', obj, err);
      }
    });
  },
  
  getAll: function(callback) {
    var query = new Parse.Query(Post);
    query.descending("createdAt");
    query.find({
      success: function(posts) {
        callback(posts);
      },
      error: function(obj, err) {
        console.error('getAll() error', obj, err);
      }
    });
  }
});

module.exports = Post;