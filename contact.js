const mongoose= require('mongoose');
const ContactSchema=new mongoose.Schema({
    discription:{
      type:String,
      required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:Date,
        required:true
    }
});
const Contact= mongoose.model('Contact',ContactSchema);
module.exports=Contact;





