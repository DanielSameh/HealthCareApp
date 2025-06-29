# Wellness API Server

This is a lightweight Express API server that provides wellness suggestions based on user inputs.

## Features

- RESTful API for wellness suggestions
- Accepts user mood, sleep hours, and notes
- Returns personalized wellness suggestions

### POST /api/suggestions

Get a wellness suggestion based on user inputs.

**Request Body:**
```json
{
  "mood": 3,
  "sleepHours": 7,
  "notes": "Feeling pretty good today"
}
```

**Response:**
```json
{
  "suggestion": "Try something new that challenges you",
  "category": "high"
}
```

## Setup Instructions

1. Install dependencies:
```sh
cd server
npm install
```

2. Start the server:
```sh
npm run dev
```

The server will run on port 3000 by default (http://localhost:3000).

## Integration with React Native App

The React Native app is configured to connect to this API server. The integration is handled through the `src/services/api.ts` file, which includes functions for making API requests.

If the API server is unavailable, the app will automatically fall back to local suggestion generation.
