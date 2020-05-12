const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// Setting up graphql as middleware to express. 
app.use('/graphql', graphqlHTTP({

}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

