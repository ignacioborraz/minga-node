import { Schema,model,Types } from 'mongoose'

const collection = 'authors'
const schema = new Schema({
    name: { type:String,required:true },
    last_name: { type:String,required:false },   //por default el required está en false (por lo que no es necesario escribirlo)
    city: { type:String,required:true },
    country: { type:String,required:true },
    date: { type:Date },
    photo: { type:String,required:true },
    user_id: {
        type: Types.ObjectId,   //el objectid es un tipo de dato especial de mongo que es un string con propiedades extensivas de objeto
        ref:'users',            //nombre de la colección con la que se tiene que referenciar (relacionar)
        required:true
    },
    active: { type:Boolean,required:true }
},{
    timestamps: true
})

const Author = model(collection,schema)
export default Author