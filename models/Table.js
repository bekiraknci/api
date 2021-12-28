const mongoose = require('mongoose');


const Schema  =  mongoose.Schema;

const TableSchema = new Schema ({

   
    company :{
        type : mongoose.Schema.ObjectId,
        ref :"Company"

    },
    
    tablename : {
        type : String,
        required : true,
    }

})


module.exports =mongoose.model("Table",TableSchema);
