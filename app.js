const express = require('express');
const connectDB = require('./db/connect.js')

const routes = require('./routes/task.js')

const errors = require('./middleware/customError.js');

const notFound = require('./middleware/notFound.js')

const app = express();

app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1/tasks',routes);

app.use(notFound);
app.use(errors);


const startServer = async () => {
    try {
      await connectDB();
      app.listen(process.env.port, () =>
        console.log(`Server is listening on port ${process.env.port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

  startServer();