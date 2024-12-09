const express = require('express');
const axios = require('axios');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static('public'));

// API endpoint to generate room design
app.post('/api/generate-design', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const formData = new FormData();
    formData.append('image', fs.createReadStream(file.path));

    const response = await axios.post('https://api.replicate.com/v1/predictions', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token YOUR_REPLICATE_API_KEY`
      }
    });

    const result = response.data;
    res.json({ designUrl: result.output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate design' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
