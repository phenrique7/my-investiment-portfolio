const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const Mail = require('../services/mail');
const investorProfileDescription = require('../../public/static/investor-profile-description.json');

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
        const { name, email, investorProfileLabel } = req.body;

        await Mail.sendMail({
          from:
            '"Minha Carteira de Investimentos" <minha.carteira.de.investimentos@gmail.com>',
          to: email,
          subject: 'Aqui está o seu perfil de investidor',
          template: 'quiz-result',
          context: {
            name,
            profile:
              investorProfileLabel === 'conservative'
                ? 'Conservador'
                : investorProfileLabel === 'moderate'
                ? 'Moderado'
                : 'Agressivo',
            description:
              investorProfileDescription[investorProfileLabel],
          },
        });
      }

      return res
        .status(200)
        .json({ email: 'E-mail successfully sent!' });
    } catch (err) {
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
