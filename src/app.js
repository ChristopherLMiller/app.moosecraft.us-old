import config from 'kit/config';
import App from 'src/view';

// Reducers
import counterReducer from 'src/reducers/counter';

config.addReducer('counter', counterReducer, { count: 0 });
config.enableGraphQLServer();

/* SERVER */
if (SERVER) {
  /* GRAPHQL SCHEMA */
  config.setGraphQLSchema(require('src/graphql/schema').default);

  /* CUSTOM KOA APP INSTANTIATION */
  config.getKoaApp(app => {
    // eslint-disable-next-line no-param-reassign
    app.context.engine = 'ReactQL';
    app.on('error', e => {
      // eslint-disable-next-line no-console
      console.error('Server error:', e);
    });
  });

  /* CUSTOM MIDDLEWARE */
  config.addMiddleware(async (ctx, next) => {
    ctx.set('Powered-By', ctx.engine); // <-- `ctx.engine` srt above!
    return next();
  });
}

export default App;
