import { useState } from 'react';
import { getSuggestion as fetchSuggestion } from '../services/api';

interface WellnessFormData {
  mood: number;
  sleepHours: number;
  notes: string;
}

export interface UseWellnessReturn {
  submitted: boolean;
  formData: WellnessFormData;
  suggestion: string;
  category: "low" | "medium" | "high";
  handleSubmit: (data: WellnessFormData) => Promise<{ suggestion: string; category: 'low' | 'medium' | 'high' }>;
  handleReset: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useWellness = (): UseWellnessReturn => {

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<WellnessFormData>({
    mood: 2,
    sleepHours: 7,
    notes: ''
  });
  const [suggestion, setSuggestion] = useState<string>('');
  const [category, setCategory] = useState<"low" | "medium" | "high">('low');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: WellnessFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetchSuggestion(data);
      const newSuggestion = response.suggestion;
      const newCategory = response.category;
      setSuggestion(newSuggestion);
      setCategory(newCategory);
      setFormData(data);
      setSubmitted(true);
      
      return { suggestion: newSuggestion, category: newCategory };
    } catch (err) {
      console.error('Failed to get suggestion from API', err);
      setError('Could not connect to suggestion service. Please try again later.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };


  const handleReset = () => {
    setSubmitted(false);
    setSuggestion('');
    setCategory('low');
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
    category,
    handleSubmit,
    handleReset,
    isLoading,
    error
  };
};

export default useWellness;
