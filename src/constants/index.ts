export const MOOD_OPTIONS = ['😔', '😐', '🙂', '😊', '😁'];


export type SuggestionCategory = 'low' | 'medium' | 'high';


export const SUGGESTIONS_BY_SCORE: Record<SuggestionCategory, string[]> = {
  low: [
    "Try a 5-minute meditation to calm your mind",
    "Consider reaching out to a friend or family member for support",
    "Take a short walk outside to get some fresh air",
    "Practice deep breathing for 2 minutes to reduce stress",
    "Write down one thing you're grateful for today"
  ],
  medium: [
    "Try a 10-minute meditation session",
    "Take a 15-minute walk outside",
    "Practice deep breathing exercises",
    "Drink a glass of water and do some light stretching",
    "Call a friend for a quick chat"
  ],
  high: [
    "Continue your great habits and try adding a new wellness activity",
    "Share your positive energy with someone who might need it today",
    "Write down three things you're grateful for to maintain perspective",
    "Try a new physical activity you've been curious about",
    "Plan a small celebration or treat for your continued wellness efforts"
  ]
};


export const SUGGESTIONS = [
  ...SUGGESTIONS_BY_SCORE.low,
  ...SUGGESTIONS_BY_SCORE.medium,
  ...SUGGESTIONS_BY_SCORE.high
];
