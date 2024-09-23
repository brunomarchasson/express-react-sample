import React, {
  useEffect,
  useState,
  ChangeEvent,
  DragEvent,
  useCallback,
} from 'react';
import style from './imageinput.style.module.scss';
import { Icon } from '../icons';
import clsx from 'clsx';

// Constants for file size limit and supported formats
const FILE_SIZE_LIMIT_MB = 15;
const SUPPORTED_FILE_TYPES = ['.jpg', '.jpeg', '.png'];

interface ImageInputProps {
  onChange: (file: string | null) => void;
  value?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({
  onChange: onChange,
  value,
}) => {
  const [file, setFile] = useState<string | null>(value ?? null);

  const isFileValid = (file: File) => {
    const sizeInMB = file.size / (1024 * 1024);
    return sizeInMB <= FILE_SIZE_LIMIT_MB;
  };

  const processFile = (file: File) => {
    const validFile = isFileValid(file);
    if (validFile) {
      const reader = new FileReader();
      reader.onload = () => setFile(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) processFile(selectedFile);
    },
    [],
  );

  const handleDrop = useCallback((event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  }, []);

  const handleRemoveFile = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setFile(null);
    },
    [],
  );

  useEffect(() => {
    onChange(file);
  }, [file, onChange]);

  return (
    <label
      className={clsx(
        style['document-uploader'],
        file ? style['upload-box active'] : style['upload-box'],
      )}
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
      aria-label="File uploader area"
    >
      {file && (
        <div className={style.overlay}>
          <Icon
            icon="Trash"
            onClick={handleRemoveFile}
            aria-label={`Remove file`}
            role="button"
          />
        </div>
      )}
      <div className={style.preview}>
        {file ? <img src={file}></img> : <Icon icon="UserRoundPen" size={64} />}
      </div>
      <input
        type="file"
        hidden
        id="browse"
        onChange={handleFileChange}
        accept={SUPPORTED_FILE_TYPES.join(',')}
      />
    </label>
  );
};

export default ImageInput;
