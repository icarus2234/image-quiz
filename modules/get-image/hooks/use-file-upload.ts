import { useCallback, useState } from 'react';

import {
  defaultAcceptedImageTypes as rawAcceptedImageTypes,
  defaultMaxFileSize,
  FileStorage,
  imageFilePathKey,
  isFileSizeValid,
  isFileTypeValid,
  localFileStorage,
} from '@/helpers';

interface UseFileUploadProps {
  maxSize?: number;
  acceptedImageTypes?: string[];
  storage?: FileStorage;
  storageKey?: string;
}

const defaultAcceptedTypes = Object.keys(rawAcceptedImageTypes);

export function useFileUpload({
  maxSize = defaultMaxFileSize,
  acceptedImageTypes = defaultAcceptedTypes,
  storage = localFileStorage,
  storageKey = imageFilePathKey,
}: UseFileUploadProps = {}) {
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = useCallback(
    (file: File) => {
      setError(null);

      if (!isFileSizeValid(file, maxSize)) {
        setError('File size exceeds the limit');
        return;
      }

      if (!isFileTypeValid(file, acceptedImageTypes)) {
        setError('Unsupported file type');
        return;
      }

      setIsFileUploading(true);

      try {
        storage.save(storageKey, URL.createObjectURL(file));
        setIsFileUploaded(true);
      } catch {
        setError('Error, please try again');
      } finally {
        setIsFileUploading(false);
      }
    },
    [acceptedImageTypes, maxSize, storage, storageKey]
  );

  return { handleFileUpload, isFileUploading, isFileUploaded, error };
}
