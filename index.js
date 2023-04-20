const express = require('express');

const app = express()
const port = process.env.PORT || 5000

app.get('*', (req, res) => {
  const { baseUrl, path } = req;
  const fullPath = baseUrl + path;
  res.redirect(`https://explo.co/docs${fullPath}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})