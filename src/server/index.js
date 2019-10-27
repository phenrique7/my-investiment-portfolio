const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const Mail = require('../services/mail');
const profileDescription = require('../../public/static/investor-profile-description.json');

const IMAGES_BASE_URL =
  'https://my-investiment-portfolio.pauloh1288.now.sh/static/images';
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 3000;

function getInvestorProfileLabel(investorProfileLabel) {
  switch (investorProfileLabel) {
    case 'conservative':
      return 'Conservador';
    case 'moderate':
      return 'Moderado';
    default:
      return 'Agressivo';
  }
}

function getChartImageUrl(investorProfileLabel) {
  switch (investorProfileLabel) {
    case 'conservative':
      return `${IMAGES_BASE_URL}/email-conservative-profile-chart.png`;
    case 'moderate':
      return `${IMAGES_BASE_URL}/email-moderate-profile-chart.png`;
    default:
      return `${IMAGES_BASE_URL}/email-agressive-profile-chart.png`;
  }
}

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/send-email', async (req, res) => {
    try {
      const { name, email, investorProfile } = req.body;

      await Mail.sendMail({
        from:
          '"Minha Carteira de Investimentos" <minhacarteiradeinvestimentos@gmail.com>',
        to: email,
        subject: 'Aqui está o seu perfil de investidor',
        template: 'quiz-result',
        context: {
          name,
          profile: getInvestorProfileLabel(investorProfile),
          description: profileDescription[investorProfile],
          chartImageUrl: getChartImageUrl(investorProfile),
          imagesBaseUrl: IMAGES_BASE_URL,
        },
      });

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
