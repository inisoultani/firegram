import React from 'react';
import { useState } from 'react';

import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedTypes = ['image/png', 'image/jpeg'];

  const onFileChange = (event) => {
    let selected = event.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file with type png or jpeg only');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={onFileChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && (
          <div>
            <ProgressBar file={file} setFile={setFile} />
          </div>
        )}
      </div>
    </form>
  );
};

export default UploadForm;
