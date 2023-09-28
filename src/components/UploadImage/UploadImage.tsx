import React, { useState } from 'react';
import { GrUpload } from 'react-icons/gr';
import './UploadImage.css';

interface UploadImageProps {
  onSaveImage: (imageData: string) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onSaveImage }) => {
  const [imgs, setImgs] = useState<string | null>(null);

  const convertToBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const data = new FileReader();


      data.addEventListener('load', () => {
        const imageData = data.result as string; // Cast to string
        setImgs(imageData);
        if (imageData) {
          onSaveImage(imageData); // Move this here to ensure it's called after setImgs
          console.log(imageData);
        } else {
          alert('please insert an Image');
        }
      });

      data.readAsDataURL(file);
    }
  };

  return (
    <div>
      {!imgs ?
        <div>
          <input accept=".png, .jpg" id="imageChoose" type="file" onChange={convertToBase64} hidden />
          <label className='imageChooseLabel' htmlFor="imageChoose">
            <div className='chooseImageContainer'>
              <GrUpload />
              <h4>Upload cover image</h4>
              <p>16:9 ratio is recommended. Max image size 1mb</p>
            </div>
          </label>
        </div>
        :
        <div className='choosenImageContainer'>
          <div className='imgCover'>
            <img src={imgs} alt="" />
          </div>
          <div className='buttonContainer'>
            <button onClick={() => { setImgs(null); onSaveImage(''); }}>X Delete</button>
          </div>
        </div>
      }

    </div>
  );
};

export default UploadImage;
