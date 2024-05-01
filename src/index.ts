import express from "express";
import mongoose from 'mongoose';
import Router from "./routes/route";
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use('/', Router);
app.use('/upload', express.static("upload"));

async function startServer() {
  try {
    await mongoose.connect('mongodb+srv://abdullahalsakib7075:Dd3IETUMZ5hU8e0v@cluster0.xb6j00z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

startServer();

