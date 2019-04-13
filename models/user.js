var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var passwordLocalMongoose= require('passport-local-mongoose');

var User = new Schema({
    firstname: {
      type: String,
        default: ''
    },
    lastname: {
      type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passwordLocalMongoose);

var User=mongoose.model('User', User);

module.exports =User;
