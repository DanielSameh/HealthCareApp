# Wellness Assistant App

A mobile application that helps users track their wellness through daily check-ins, providing personalized suggestions based on mood, sleep, and notes. Includes a lightweight Express backend API for suggestion generation.

## Features

- Daily wellness check-ins with mood selection and sleep tracking
- Personalized wellness suggestions based on user inputs
- Beautiful animations and transitions between screens
- Clean, modern UI with separate cards for suggestions and check-in summaries
- Express backend API for suggestion generation with local fallback

## Tech Stack

### Frontend
- **React Native** - Core framework for cross-platform mobile development
- **TypeScript** - For type safety and better developer experience
- **React Navigation** - For screen navigation and transitions
- **Tamagui** - UI component library for consistent styling
- **React Native Reanimated** - For smooth animations and transitions
- **React Native Safe Area Context** - For proper handling of device safe areas

### Backend
- **Express** - Lightweight Node.js web framework for the API
- **CORS** - Cross-Origin Resource Sharing middleware
- **Morgan** - HTTP request logger middleware

## Implementation Approach

- **Custom Hook Architecture**: Encapsulated wellness logic in a reusable `useWellness` hook, separating business logic from UI components
- **Component-Based Design**: Created modular, reusable components like `MoodSelector`, `SleepHoursSelector`, and `SuggestionCard`
- **Navigation-Based Flow**: Implemented React Navigation for better screen transitions and state management between form and success screens

## Setup Instructions

### Mobile App
1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   ```
3. Install iOS dependencies (for iOS development):
   ```sh
   cd ios && pod install && cd ..
   ```
4. Start the Metro bundler:
   ```sh
   npm start
   # or
   yarn start
   ```
5. Run the app on your preferred platform:

### Backend API
1. Install server dependencies:
   ```sh
   cd server
   npm install
   ```
2. Start the Express server:
   ```sh
   npm run dev
   ```
   The server will run on http://localhost:3000

### Android
```sh
npm run android
# or
yarn android
```

### iOS
```sh
npm run ios
# or
yarn ios
```

## Design Decisions

### 1. Separation of UI Components

I decided to separate the wellness suggestion and check-in summary into two distinct cards in the `SuggestionCard` component. This design decision improves:

- **Visual clarity**: Users can clearly distinguish between the app's suggestion and their own input data
- **Information hierarchy**: The suggestion stands out with a different background color, emphasizing its importance
- **Scalability**: Each card can be independently styled and expanded with additional features in the future

### 2. Custom Hook Architecture

I implemented a custom `useWellness` hook to encapsulate all wellness-related logic, which offers several benefits:

- **Reusability**: The same wellness logic can be used across different components
- **Separation of concerns**: UI components focus on presentation while the hook handles business logic
- **Testability**: The hook can be tested independently from the UI components
- **Maintainability**: Changes to wellness logic can be made in one place without affecting UI components



