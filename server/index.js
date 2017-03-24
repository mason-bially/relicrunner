import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import Schema from './schema';

const PORT = process.env.PORT || 3000;

var app = express();

// app.use(cors());
app.use(express.static('static'))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: Schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);