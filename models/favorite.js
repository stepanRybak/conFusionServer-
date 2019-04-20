const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);



var favoriteSchema= new Schema({

    dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    },
   author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    usePushEach: true,
    timestamps: true
});






var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;