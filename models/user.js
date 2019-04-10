var mongoose= require('mongoose');
var Schema= mongoose.Schema;
var passwordLocalMongoose= require('passport-local-mongoose');

var User = new Schema({
    admin: {
        type:Boolean,
        default:false

    }
});

User.plugin(passwordLocalMongoose);

module.exports=mongoose.model('User', User);