import { PageTypes, QuizConfig } from './types';

export const quizConfig: QuizConfig = {
  id: 'image-quiz',
  pages: [
    {
      id: 'page1',
      pageType: PageTypes.SingleChoice,
      title: 'Are you from {country}',
      nextPageId: 'page2',
      pageData: {
        headerProgress: 25,
      },
      answers: [
        {
          id: 'random-id-1',
          label: 'Yes, I’m from {country}',
          value: '{country}',
          nextPageId: 'page2',
        },
        {
          id: 'random-id-2',
          label: 'No, I’m from another country',
          value: 'another-country',
          nextPageId: 'page2',
        },
      ],
    },
    {
      id: 'page2',
      pageType: PageTypes.SingleChoice,
      nextPageId: 'get-image',
      pageData: {
        headerProgress: 50,
      },
      title: 'Ready to create your first photo album?',
      answers: [
        {
          id: 'random-id-3',
          label: 'Yes, let’s begin',
          value: 'yes-create-image',
          nextPageId: 'get-image',
        },
        {
          id: 'random-id-4',
          label: 'No, not interested yet',
          value: 'no-image-create',
          nextPageId: 'end-without-image',
        },
      ],
    },
    {
      id: 'get-image',
      pageType: PageTypes.ImageCollection,
      nextPageId: 'end-with-image',
      pageData: {
        headerProgress: 75,
      },
      title: 'Upload an Image',
      answers: [],
    },
    {
      id: 'end-with-image',
      pageType: PageTypes.End,
      nextPageId: '',
      pageData: {
        headerProgress: 100,
      },
      title: 'Image uploaded successfully',
      answers: [],
    },
    {
      id: 'end-without-image',
      pageType: PageTypes.End,
      nextPageId: '',
      pageData: {
        headerProgress: 100,
      },
      title: 'Well then let’s try next time',
      answers: [],
    },
  ],
};
