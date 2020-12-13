import express from 'express';

const app = express();

app.get('/', (req, res, _next) => {
  res.json({ status: 'OK' });
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});
