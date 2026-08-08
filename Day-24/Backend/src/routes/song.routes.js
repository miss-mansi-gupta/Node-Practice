const express = require("express");
const upload = require("../middlewares/upload.middleware");
const songController = require("../controllers/song.controller");

const router = express.Router()

/**
 * @routes POST /api/songs
 * @description uploading songs based on mood
 */
router.post("/", upload.single("song"), songController.uploadSong)

/**
 * @routes GET /api/songs
 * @description fetching songs based on mood
 */
router.get("/", songController.getSong)

module.exports = router;
