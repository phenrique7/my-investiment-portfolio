const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const Mail = require('../services/mail');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 3000;

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/send-email', async (req, res) => {
    try {
      if (dev) {
        console.log('res.body', res.body);

        await Mail.sendMail({
          from: '"Paulo Henrique" <paulo.henrique@email.com>',
          to: res.body.email,
          subject: 'Resultado do seu perfil de investidor',
          html: '<p>Outro teste</p>',
        });
      }

      return res
        .status(200)
        .json({ email: 'Successfully sending e-mail!' });
    } catch (err) {
      console.log('error on sending e-mail', err);
      return res.status(500);
    }
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}`);
  });
});
