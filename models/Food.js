const mongoose = require('mongoose');


const Schema  =  mongoose.Schema;

const FoodSchema = new Schema ({

    category :{
        type : mongoose.Schema.ObjectId,
        ref :"Category"

    },

    foodname :{
        type : String,
        required : true,


    },
    foodprice :{

        type : Boolean,
        required : true,
    },
    foodimg : {
        type : String,

    },
    

})
module.exports =mongoose.model("Food",FoodSchema);