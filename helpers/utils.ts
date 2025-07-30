import { resultsStorageKey } from './constants';
import { localFileStorage } from './storage';

// For prod use, i might use "t" function from i18next or next-intel libs, it is more scalable and maintainable
export const replaceTemplatePlaceholders = (template?: string, data?: Record<string, string>) => {
  if (!template) return '';

  return Object.entries(data || {}).reduce((result, [key, value]) => {
    const placeholder = `{${key}}`;
    return result.replace(new RegExp(placeholder, 'g'), value || '');
  }, template);
};

export const isFileTypeValid = (file: File, acceptedTypes: string[]) => {
  return acceptedTypes.includes(file.type);
};

export const isFileSizeValid = (file: File, maxSize: number) => {
  return file.size <= maxSize;
};

export const saveResults = (newResults: string) => {
  const prevResults = localFileStorage.get(resultsStorageKey);

  localFileStorage.save(
    resultsStorageKey,
    prevResults ? `${prevResults},${newResults}` : newResults
  );
};
