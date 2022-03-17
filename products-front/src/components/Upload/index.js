import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  uploadImageAsync,
  uploadImageCloudinaryAsync,
} from "../../slices/productSlices";

const Upload = () => {
  const [pathImage, setPathImage] = useState(
    "http://localhost:5000/static/test.png"
  );

  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const handleSendImage = (e) => {
    e.preventDefault();
    dispatch(uploadImageAsync(file));
  };

  const handleChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);

      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load() {
          const { result } = reader;
          setPathImage(result);
        };
      }
    }
  };

  const handleSendImageWithCloudinary = (e) => {
    e.preventDefault();
    dispatch(uploadImageCloudinaryAsync(file));
  };

  return (
    <form>
      <div>
        <input type="file" placeholder="file" onChange={handleChange} />
        <img src={pathImage} alt="image" />
        <button type="submit" onClick={handleSendImage}>
          Send Image with my API
        </button>
        <button type="submit" onClick={handleSendImageWithCloudinary}>
          Send Image with Cloudinary
        </button>
      </div>
    </form>
  );
};

export default Upload;
