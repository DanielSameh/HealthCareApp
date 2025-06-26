import { useState } from 'react';
import { SUGGESTIONS_BY_SCORE, SuggestionCategory } from '../constants';

interface WellnessFormData {
  mood: number;
  sleepHours: number;
  notes: string;
}

export interface UseWellnessReturn {
  submitted: boolean;
  formData: WellnessFormData;
  suggestion: string;
  handleSubmit: (data: WellnessFormData) => { suggestion: string };
  handleReset: () => void;
}

export const useWellness = (): UseWellnessReturn => {

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<WellnessFormData>({
    mood: 2,
    sleepHours: 7,
    notes: ''
  });
  const [suggestion, setSuggestion] = useState<string>('');


  const calculateWellnessScore = (data: WellnessFormData): number => {

    const moodScore = data.mood;
    

    let sleepScore = 0;
    if (data.sleepHours >= 7 && data.sleepHours <= 8) {
      sleepScore = 8;
    } else if (data.sleepHours >= 6 && data.sleepHours <= 9) {
      sleepScore = 6;
    } else if (data.sleepHours >= 5 && data.sleepHours <= 10) {
      sleepScore = 4;
    } else {
      sleepScore = 2;
    }
    

    const notesScore = data.notes.length > 0 ? Math.min(Math.floor(data.notes.length / 20), 3) : 0;
    

    return moodScore + sleepScore + notesScore;
  };

  const getSuggestionCategory = (score: number): SuggestionCategory => {
    if (score <= 5) {
      return 'low';
    } else if (score <= 10) {
      return 'medium';
    } else {
      return 'high';
    }
  };

  const getRandomSuggestion = (category: SuggestionCategory): string => {
    const suggestions = SUGGESTIONS_BY_SCORE[category];
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    return suggestions[randomIndex];
  };


  const handleSubmit = (data: WellnessFormData) => {

    const wellnessScore = calculateWellnessScore(data);
    

    const suggestionCategory = getSuggestionCategory(wellnessScore);
    

    const newSuggestion = getRandomSuggestion(suggestionCategory);
    
    setSuggestion(newSuggestion);
    setFormData(data);
    setSubmitted(true);
    

    return { suggestion: newSuggestion };
  };


  const handleReset = () => {
    setSubmitted(false);
    setSuggestion('');
    setFormData({
      mood: 2,
      sleepHours: 7,
      notes: ''
    });
  };

  return {
    submitted,
    formData,
    suggestion,
    handleSubmit,
    handleReset
  };
};

export default useWellness;
