import path from 'path';
import multer from 'multer';
import { Request } from 'express';
import fs from 'fs';

const uploadDir = 'upload/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

var storage = multer.diskStorage({
    destination: function (req: Request, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req: Request, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});

var upload = multer({
    storage: storage,
    fileFilter: function (req: Request, file, cb) {
        if (
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg'
        ) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 4,
    },
});

export default upload;
