import config from 'kit/config';
import App from 'src/view';

// Reducers
import menuReducer from 'src/reducers/menu';
import serverRulesReducer from 'src/reducers/server-rules';

config.addReducer('menu', menuReducer);
config.addReducer('serverRules', serverRulesReducer);

config.enableGraphQLServer();

/* SERVER */
if (SERVER) {
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
