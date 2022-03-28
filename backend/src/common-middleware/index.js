const multer=require('multer')
const path=require('path')
const shortid=require('shortid')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const s3=new aws.S3({
    accessKeyId:'AKIASOKHUIXCQQ4OOL5P',
    secretAccessKey:'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'
})

exports.upload=multer({storage})

exports.uploadS3 = multer({
    storage: multerS3({
      s3: s3,
      acl:'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      contentDisposition:'inline',
      bucket: 'materialsproject',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null,  shortid.generate() + '-' + file.originalname)
      }
    })
  })
