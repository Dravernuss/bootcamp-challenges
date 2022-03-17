import express from "express";
import multer from "multer";
import storage from "../config/multer.js";

const uploader = multer({ storage });

const router = express.Router();

const uploadRoutes = {
  UPLOAD: "/upload",
};

router.post(uploadRoutes.UPLOAD, uploader.single("file"), async (req, res) => {
  res.send("sent image");
});

export default router;
