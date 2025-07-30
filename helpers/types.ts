export enum Routes {
  Home = '/',
}

export enum PageTypes {
  ImageCollection = 'image-collection',
  MultiChoice = 'multi-choice',
  SingleChoice = 'single-choice',
  End = 'end',
}

export type AnswerValues = string | number;

export type Answer = {
  id: string;
  label?: string;
  value?: AnswerValues;
  nextPageId?: string;
};

export type QuizPage = {
  id: string;
  pageType: PageTypes;
  title?: string;
  pageData?: Record<string, unknown>;
  nextPageId?: string;
  answers: Answer[];
};

export type QuizConfig = {
  id: string;
  pages: QuizPage[];
};

export interface FileStorage {
  save: (key: string, value: string) => void;
  get: (key: string) => string | null;
  remove: (key: string) => void;
  clear: () => void;
}
