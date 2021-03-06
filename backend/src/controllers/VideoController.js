const mongodb = require('mongodb');
const fs = require("fs")
const mongoClient = require( '../database/connection' );

module.exports = {

    index (req, res) {
        const titles = fs.readdirSync("videos").map(filename => {
            return {title: (filename.split('.'))[0]};
        });

        res.send(titles);
    },


    async viewVideo (req, res) {
        res.sendFile(__dirname + "/index.html");
    },

    async upload(req, res) {
        const title = req.params.title;
        const db = mongoClient.getDb();
        const bucket = new mongodb.GridFSBucket(db);
        const videoUploadStream = bucket.openUploadStream(title);
        const videoReadStream = fs.createReadStream(`videos/${title}.mp4`);
        videoReadStream.pipe(videoUploadStream);
        res.status(200).send("Done...");
    },

    async fetchVideo(req, res) {
        const range = req.headers.range;
        const title = req.params.title;

        if (title === null){
            res.sendStatus(404);
            return;
        }

        if (!range) {
        res.status(400).send("Requires Range header");
        }

        const db = mongoClient.getDb();
        // GridFS Collection
        db.collection('fs.files').findOne({}, (err, video) => {
        if (!video) {
            res.status(404).send("No video uploaded!");
            return;
        }

        // Create response headers
        const videoSize = video.length;
        const start = Number(range.replace(/\D/g, ""));
        const end = videoSize - 1;

        const contentLength = end - start + 1;
        console.log('range: ', range)
        console.log('videoSize: ', videoSize)
        console.log('contentLenght: ', contentLength)
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };

        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);

        const bucket = new mongodb.GridFSBucket(db);
        const downloadStream = bucket.openDownloadStreamByName(title, {
            start
        });

        // Finally pipe video to response
        downloadStream.pipe(res);
        });
    }
}