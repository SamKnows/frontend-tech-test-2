import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';
import open from 'open';

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
});
