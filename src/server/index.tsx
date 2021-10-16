import React from 'react';
import express from 'express';
import cookieParser from 'cookie-parser';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import ServerApp from '../frontend/routes/ServerApp';
import { ENV, PORT } from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.disable('x-powered-by');

const setResponse = (html: string) => {
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <base href="/" />
        <meta charset="utf-8" />
        <link rel="icon" href="icon.png" type="image/png" />
        <meta name="theme-color" content="#FF585D" />
        <link rel="apple-touch-icon" href="icon.png" />
        <meta name="description" content="Airbnb clone" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <title>Airbnb</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" src="index.js"></script>
      </body>
    </html>`
  );
};

const renderApp = async (req: express.Request, res: express.Response) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <ServerApp />
    </StaticRouter>,
  );

  res
    .set('Content-Security-Policy', "default-src *; img-src * 'self' blob: data: http://*;  style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    .send(setResponse(html));
};

app.post('/api/cost', (req, res, next) => {
  const { price, quantity, discount } = req.body;
  const total = price * quantity;
  const result = total - ((total * discount) / 100);
  res.status(200).json({
    data: result,
  });
});

app.post('/api/host', (req, res, next) => {
  const { rooms, bathrooms, garden } = req.body;
  const price = (rooms * 2500) + (bathrooms * 2000) + (garden * 4000);

  res.status(200).json({
    data: price,
  });
});

app.post('/api/discount', (req, res, next) => {
  const { code } = req.body;
  const codes = [
    { code: 'agvcoder', discount: 20 },
    { code: 'uamc', discount: 10 },
  ];
  const codeValid = codes.find((item) => item.code === code);
  if (codeValid) {
    res.status(200).json({
      data: codeValid.discount,
    });
    return;
  }
  res.status(404).json({
    data: {},
    message: 'Discount invalid',
  });

});

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
