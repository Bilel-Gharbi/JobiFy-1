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

/* 
module.exports.send = (req, res, next) => {
  return upload.single('file')(req, res, () => {
    // Remember, the middleware will call it's next function
    // so we can inject our controller manually as the next()

    if (!req.file) return res.json({ error: ErrorMessages.invalidFiletype })
    next()
  })
}
 */
module.exports = multer({ storage: storage });
