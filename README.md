# Image Quiz

A Next.js app for interactive image-based quizzes. Users answer questions, upload images, and see results.

- Demo: [Image Quiz Demo](https://image-quiz.vercel.app)

## Features

- Multi-step quiz with single/multi-choice questions
- Image upload and preview
- Progress bar and header
- Persistent results using localStorage
- Responsive design

## File Structure

```
app/
  [pageId]/         # Dynamic quiz pages
  end-with-image/   # End page with uploaded image
  end-without-image/# End page without image
  get-image/        # Image upload page
  page1/            # First quiz page (with user data)
  home/             # Home page
  layout.tsx        # Root layout
  global-error.tsx  # Global error handler
  loading.tsx       # Loading spinner
  not-found.tsx     # 404 page

modules/
  layout/
    header/         # Progress header
    button/         # Custom button
    main-container/ # Main content wrapper
    progress-bar/   # Progress bar
    typography/     # Typography components
  quiz/
    templates/
      quiz-page/    # Quiz page template
    hooks/          # Quiz logic hooks
    components/
      answer-container/ # List of answer options
      answer-option/   # Individual answer option
  get-image/
    templates/      # Image upload page template
    hooks/          # Image upload logic
    components/
      image-dropzone/  # Drag-and-drop upload UI
  end/
    templates/      # End page template
  home/
    templates/      # Home page template

helpers/
  constants.ts      # App constants
  fetch-instance.ts # API fetch helpers
  index.ts          # Helper exports
  metadata-content.ts # Metadata for SEO
  mock-data.ts      # Quiz config mock
  storage.ts        # Local storage helpers
  types.ts          # Type definitions
  utils.ts          # Utility functions

store/
  ...               # State management (for header progress)
public/
  icons/            # SVG icons

styles/
  reset.css         # CSS reset
  global.css        # Global styles
```

## Logic Overview

- **Quiz Flow:** Pages are defined in `helpers/mock-data.ts`. Navigation is handled by Next.js routing and custom hooks.
- **Answer Selection:** Selecting an answer saves results and moves to the next page.
- **Image Upload:** Uses drag-and-drop (`react-dropzone`), validates file type/size, and stores image path in localStorage.
- **Progress Bar:** Shows quiz progress based on page data.
- **State:** Uses custom store (`useQuizStore`) for progress tracking.

## Getting Started

1. **Install dependencies:**

   ```
   pnpm i
   ```

2. **Run the development server:**

   ```
   pnpm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Advantages

- **Modular Structure:** Easy to extend with new question types or logic.
- **Easy change storage for images:** Simplified image storage management using localStorage that can be changed for different storage solutions.

## Suggested Improvements

- **Client side caching for fetch:** Implement caching for API requests in client-side, in context of quiz it is not critical.
- **Testing:** Add unit and integration tests for components and hooks.
