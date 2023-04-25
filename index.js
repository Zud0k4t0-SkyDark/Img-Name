import * as textpro from "./logo.js";
import  express  from "express";
import cors from 'cors'
import bodyParser from "body-parser"
const app = express();

const server = async() => {
        // Modulos
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    const imgName = express.Router();
    imgName.post('/images', async (req, res) => {
        const img = req.body.img
        const text = req.body.text
        const uriText = await textpro.textpro(img, text)
        console.log(uriText)
        res.send(uriText)
        
    })  
    app.use('', imgName); 
    app.listen(3000, () => {
        console.log("listening on port 3000")
    })
}
server()

// textpro.textpro("3D-sci-fi", "caca").then((data) => {
//     console.log(data)
// })