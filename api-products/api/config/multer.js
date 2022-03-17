import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    const { name } = req.body;
    const filename = `${name}-${Date.now()}.${file.mimetype.split("/")[1]}`;
    cb(null, filename);
  },
});

export default storage;
