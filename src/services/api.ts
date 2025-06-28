
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

interface WellnessFormData {
  mood: number;
  sleepHours: number;
  notes: string;
}

interface SuggestionResponse {
  suggestion: string;
}

export const getSuggestion = async (data: WellnessFormData): Promise<SuggestionResponse> => {
  try {
    const response = await api.post<SuggestionResponse>('/suggestions', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.error || 'Failed to get suggestion');
    }
    console.error('API Error:', error);
    throw error;
  }
};