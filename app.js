const express = require('express');
const app = express();
const vendorRoutes = require('./routes/vendorRoutes');
const port = 3000;

app.use('/api', vendorRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'not found' });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
