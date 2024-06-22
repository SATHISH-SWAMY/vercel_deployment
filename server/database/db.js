import mongoose from 'mongoose';


const connection = () => {
    const DB_URI ="mongodb+srv://anthonyswamy370:DbLb6tWyRlMat5Sx@cluster0.43fzhth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try{
          mongoose.connect(DB_URI, {useNewUrlParser:true});
          console.log('database connected successfully')
    } catch (error){
        console.log('error while connection with the database' , error.message);
    }
}


export default connection;
 
 

