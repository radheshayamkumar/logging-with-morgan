
import itemRoutes from './routes/itemRoutes.js';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//import logger
import logger from "./logger.js";
import morgan from "morgan";


const app = express();  // create express app

//logger 
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

//middleware
app.use((bodyParser.json()));

// //connect to mongodb
mongoose.connect('mongodb+srv://radheshayamsingh47:ZXYzSufZEJxDgP0C@cluster0.geprm.mongodb.net/')


mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
})

//routes
app.use('/api/items', itemRoutes);
//
//start server
const PORT = 5000;  
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  // listen for requests