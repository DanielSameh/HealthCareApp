const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { getSuggestion } = require('./suggestions');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.post('/api/suggestions', (req, res) => {
  try {
    const { mood, sleepHours, notes } = req.body;
    
    if (mood === undefined || sleepHours === undefined) {
      return res.status(400).json({ error: 'Missing required fields: mood and sleepHours are required' });
    }
    
    const suggestion = getSuggestion(mood, sleepHours, notes);
    
    res.json({ 
      suggestion: suggestion.suggestion,
      category: suggestion.category,
    });
  } catch (error) {
    console.error('Error processing suggestion request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
