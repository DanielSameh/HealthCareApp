
const SUGGESTIONS_BY_CATEGORY = {
  low: [
    "Try a 5-minute meditation to calm your mind",
    "Take a short walk outside to refresh yourself",
    "Practice deep breathing for 2 minutes",
    "Listen to a calming song that you enjoy",
    "Write down three things you're grateful for today"
  ],
  medium: [
    "Consider a 15-minute yoga session to boost your energy",
    "Call a friend for a quick chat",
    "Try thinking about your thoughts for 10 minutes",
    "Make yourself a nutritious meal or snack",
    "Take a short break from screens and rest your eyes"
  ],
  high: [
    "Share your positive energy with someone today",
    "Try something new that challenges you",
    "Plan a fun activity for later this week",
    "Reflect on your recent accomplishments",
    "Set an intention for tomorrow"
  ]
};


const calculateWellnessScore = (mood, sleepHours, notes = '') => {
  const moodScore = mood;
  
  let sleepScore = 0;
  if (sleepHours >= 7 && sleepHours <= 8) {
    sleepScore = 8;
  } else if (sleepHours >= 6 && sleepHours <= 9) {
    sleepScore = 6;
  } else if (sleepHours >= 5 && sleepHours <= 10) {
    sleepScore = 4;
  } else {
    sleepScore = 2;
  }
  
  const notesScore = notes && notes.length > 0 ? Math.min(Math.floor(notes.length / 20), 3) : 0;
  
  return moodScore + sleepScore + notesScore;
};

const getSuggestionCategory = (score) => {
  if (score <= 5) {
    return 'low';
  } else if (score <= 10) {
    return 'medium';
  } else {
    return 'high';
  }
};

const getRandomSuggestion = (category) => {
  const suggestions = SUGGESTIONS_BY_CATEGORY[category];
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  return suggestions[randomIndex];
};

const getSuggestion = (mood, sleepHours, notes = '') => {
  const wellnessScore = calculateWellnessScore(mood, sleepHours, notes);
  const category = getSuggestionCategory(wellnessScore);
  const suggestion = getRandomSuggestion(category);
  
  return {
    suggestion
  };
};

module.exports = {
  getSuggestion
};
