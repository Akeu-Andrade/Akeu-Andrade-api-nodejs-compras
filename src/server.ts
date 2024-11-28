import express from 'express';
import routers from './routes';

const app = express();
app.use(express.json());

const port = 3000;

app.use('/', routers);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});