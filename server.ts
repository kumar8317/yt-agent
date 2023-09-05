import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
import routes from './routes/index';

// Use routes
app.use('/api', routes);

app.listen(3000, () => {
  console.log('app is running on port 3000');
});