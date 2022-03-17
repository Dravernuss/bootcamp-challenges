import axios from "axios";

export const sendImage = (name, file) => {
  const form = new FormData();
  form.append("name", name);
  form.append("file", file, "form-data");
  const apiUrl = "http://localhost:5000/upload";
  axios.post(apiUrl, form).then((result) => {
    console.log("Result image uploaded ", result);
  });
};

export const sendImageCloudinary = (name, file) => {
  const form = new FormData();
  form.append("file", file, "form-data");
  form.append("upload_preset", "kkscfaad");
  const cloudName = "dravernuss";

  const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  axios.post(apiUrl, form).then((result) => {
    console.log("Result image uploaded ", result);
  });
};
