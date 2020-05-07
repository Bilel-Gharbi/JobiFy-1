const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const savedPath = path.resolve(__dirname, "../uploads/");
    cb(null, savedPath);
  },
  filename: function (req, file, cb) {
    const { mimetype } = file;
    //file name with extention
    const fullFileName = `${file.fieldname}-${Date.now()}.${mimetype.slice(
      mimetype.lastIndexOf("/") + 1
    )}`;
    cb(null, fullFileName);
  },
});

module.exports = multer({ storage: storage });
