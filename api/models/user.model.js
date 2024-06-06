import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username:{
       type:String,
       required:true,
       unique:true, 
    },
    email:{
        type:String,
        required:true,
        unique:true, 
     },
     password:{
        type:String,
        required:true, 
     },
     avatar:{
      type:String,
      default: "https://www.bing.com/images/search?q=Profile+Photo+Icon.png&form=IRTRRL&first=1"
     }
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;