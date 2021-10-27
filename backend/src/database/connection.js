const MongoClient = require( 'mongodb' ).MongoClient;
const url = 'mongodb://user:password@db:27017';

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('videos');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};