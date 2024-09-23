import React, {
  useEffect,
  useState,
  ChangeEvent,
  DragEvent,
  useCallback,
} from 'react';
import style from './style.module.scss';
import { Icon } from '../icons';
import clsx from 'clsx';

// Constants for file size limit and supported formats
const FILE_SIZE_LIMIT_MB = 15;
const SUPPORTED_FILE_TYPES = ['.jpg', '.jpeg', '.png'];

interface DragNdropProps {
  onFilesSelected: (files: File[]) => void;
  width: string;
  height: string;
}

const DragNdrop: React.FC<DragNdropProps> = ({
  onFilesSelected,
  width,
  height,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const isFileValid = (file: File) => {
    const sizeInMB = file.size / (1024 * 1024);
    return sizeInMB <= FILE_SIZE_LIMIT_MB;
  };

  // Handler for file selection from the input element
  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (selectedFiles) {
        const validFiles = Array.from(selectedFiles).filter(isFileValid);
        if (validFiles.length) {
          setFiles((prevFiles) => [...prevFiles, ...validFiles]);
        }
      }
    },
    [],
  );

  // Handler for dropping files onto the drop zone
  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles) {
      const validFiles = Array.from(droppedFiles).filter(isFileValid);
      if (validFiles.length) {
        setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      }
    }
  }, []);

  // Handler to remove a file from the list
  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  // Effect to notify parent component when files are selected
  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section className={style['drag-drop']} style={{ width, height }}>
      <div
        className={clsx(
          style['document-uploader'],
          files.length ? style['upload-box active'] : style['upload-box'],
        )}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        aria-label="File uploader area"
      >
        <div className={style['upload-info']}>
          <Icon icon="ImageUp" />
          <div>
            <p>Drag and drop your files here</p>
            <p>
              Limit {FILE_SIZE_LIMIT_MB}MB per file. Supported files:{' '}
              {SUPPORTED_FILE_TYPES.join(', ')}
            </p>
          </div>
        </div>

        <input
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          accept={SUPPORTED_FILE_TYPES.join(',')}
          multiple
        />
        <label htmlFor="browse" className={style['browse-btn']}>
          Browse files
        </label>

        {files.length > 0 && (
          <div className={style['file-list']}>
            <div className={style['file-list__container']}>
              {files.map((file, index) => (
                <div className={style['file-item']} key={index}>
                  <div className={style['file-info']}>
                    <p>{file.name}</p>
                  </div>
                  <div className={style['file-actions']}>
                    <Icon
                      icon="Trash"
                      onClick={() => handleRemoveFile(index)}
                      aria-label={`Remove file ${file.name}`}
                      role="button"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {files.length > 0 && (
          <div className="success-file">
            <Icon
              icon="CircleCheckBig"
              style={{ color: '#6DC24B', marginRight: 1 }}
            />
            <p>{files.length} file(s) selected</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DragNdrop;
