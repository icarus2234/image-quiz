import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';

import { Typography } from '@/modules/layout/typography';
import LoadingIcon from '@/public/icons/loading-icon.svg';
import UploadIcon from '@/public/icons/upload-icon.svg';

import styles from './image-dropzone.module.css';

interface ImageDropzoneProps {
  isFileUploading: boolean;
  onDrop: (acceptedFiles: File[]) => void;
  error?: string | null;
  maxSize?: number;
  acceptedTypes?: Record<string, string[]>;
}

export const ImageDropzone = ({ isFileUploading, error, onDrop }: ImageDropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        onDrop(acceptedFiles);
      }
    },
  });

  const dropAreaStyles = classNames(styles.dropArea, {
    [styles.dropAreaDragging]: isDragActive,
    [styles.dropAreaError]: error,
  });

  return (
    <>
      <div {...getRootProps()} className={dropAreaStyles}>
        <input {...getInputProps()} />
        {isFileUploading ? <LoadingIcon /> : <UploadIcon className={styles.uploadImageIcon} />}
        <Typography>Upload an image or drag and drop here</Typography>
        {error && (
          <Typography variant="body2" className="textError mt-8">
            {error}
          </Typography>
        )}
      </div>
      <Typography variant="body2" className="textSecondary">
        PNG or JPG, 10mb max
      </Typography>
    </>
  );
};
