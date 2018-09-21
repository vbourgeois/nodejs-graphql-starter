const app = require('./app');

const server = app.listen(app.get('port'), () => {
  console.info(`✓ App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode
  Press CTRL-C to stop`);
});


process.on('uncaughtException', (e) => {
  console.debug('uncaught exception:', e);
  server.close();
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  console.debug('unhandled rejection:', e);
  server.close();
  process.exit(1);
});
