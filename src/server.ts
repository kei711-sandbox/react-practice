import * as express from 'express';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('App is listening on port 3000');
});

const compiler = webpack(require('../webpack.config.dev'));
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});



