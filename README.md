# Simple Quiz

## Description

We can use the `QuizConfig` object to support A/B testing in the quiz application.

A simple version of the configuration can be found in `mock-data.ts`.

The config can be fetched at the start of the quiz and stored either in the application's store or retrieved from the Next.js cache.

## Features

- **Conditional routing**
- **Dynamic data for pages**
- **Quiz options list** _(not implemented yet)_

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/icarus2234/simple-quiz.git
   cd simple-quiz
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Run the development server:

   ```sh
   pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

- Start the quiz by clicking the "Start" button on the homepage.
- Follow the on-screen instructions.

## Project Structure

```
simple-quiz/
│── app/          # Next.js pages and layouts
│── helpers/      # Utility functions, constants, and types
│── modules/      # Reusable components and templates
│── store/        # Zustand store for state management
│── styles/       # CSS modules and global styles
│── public/       # Static assets like images and icons
```

## Technologies Used

- **Next.js**: SSR
- **React**: UI render.
- **Zustand**: Lightweight state management.
- **React Hook Form**: Form management and validation.
- **TypeScript**: Typing.
- **CSS Modules**: Scoped and modular CSS.
