/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

const postSchema = new Schema({
  titleAr: {
    type: String,
    required: true,
  },
  titleEn: {
    type: String,
    required: true,
  },
  contentAr: {
    type: String,
    required: true,
  },
  contentEn: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModal = models.Post || mongoose.model("Post", postSchema);

module.exports = PostModal;
