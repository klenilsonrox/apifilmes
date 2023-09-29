import mongoogse from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DB_USER=process.env.MONGODB_USER
const DB_PASSWORD=process.env.MONGODB_PASSWORD
const DB_CLUSTER="produtos.foawjvt.mongodb.net"
const mongoDBURL=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}`


const options = {
    useNewUrlParser: true,
  useUnifiedTopology: true,
}


export const ConnectMongoDB = async ()=>{
    await mongoogse.connect(mongoDBURL, options)
    .then(()=>{
        console.log('Conectado ao MongoDB')
    })
    .catch((error)=>{
        console.error("Erro ao conectar ao MongoDB", error)
    })
}