import express from 'express'
import mongoose from 'mongoose'
import Data from './models/Data.js';
import path from 'path';
import { fileURLToPath } from 'url';

mongoose.connect('mongodb://localhost:27017/quiz_app_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/quiz/:usertopic', async (req, res) => {
  try {
    const topic = req.params.usertopic
    const alldata = await Data.findOne({topic}) 
    // or filter by topic if needed
    res.render('index2',{ quiz_data: alldata.quiz_data });
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', async (req, res) => {
  try {
    const alldata = await Data.find();
    
    res.render('index', { alldata });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
