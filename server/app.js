const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://Oliver:Taylor175$@cluster0-5yhnk.mongodb.net/test?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to db')
})

// Setting up graphql as middleware to express. 
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

