const mongoose = require('mongoose');


const Schema  =  mongoose.Schema;

const TablefoodSchema = new Schema ({

    tablefoodname:{
        type : mongoose.Schema.ObjectId,
        ref : "Food",
        required : false,
        
    },
    companyid : {
        type : mongoose.Schema.ObjectId,
        ref :  "Company"
    },
    quantity : {
        type : Number
    },
    
    paid:{
        type : Boolean,
        required : true,
    },
    createdate:{
        type : Date,
        default : Date.now
    }

})
module.exports =mongoose.model("Tablefood",TablefoodSchema);