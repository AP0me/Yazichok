import express from 'express';
import path from 'path';

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(__dirname + "\\myapp\\public\\index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

