const mongoose = require('mongoose');

const Schema  =  mongoose.Schema;

const PayFoodSchema = new Schema({

    tablefoodid : {
        type : mongoose.Schema.ObjectId,
        ref : "Tablefood"
    },

    tableid : {
        type : mongoose.Schema.ObjectId,
        ref : "Table"

    },

    companyid : {
        type : mongoose.Schema.ObjectId,
        ref : "Company"
    },

    foodid : {
        type : mongoose.Schema.ObjectId,
        ref :  "Food"
    },
    paid :{
        type : Boolean,
        required : false,
    },
    quantity : {
        type : Number,

    },
    createDate : {
        type : Date,
        default : Date.now
    }
   

})
module.exports =mongoose.model("PayFood",PayFoodSchema);


