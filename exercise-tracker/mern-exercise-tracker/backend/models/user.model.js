const mongoose=require('mongoose');
const schema= mongoose.schema;

const userschema= new schema ({

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    timestamps:true,
});
consct user= mongoose.model('user' userschema);  
module.exports=user;