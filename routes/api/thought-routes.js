const express = require("express");
const router = express.Router();

const {
  getAllThoughts,
  getSpecficThought,
  newThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Route for finding all thoughts
router
  .route("/")
  .get(getAllThoughts)
  .post(newThought);

// Route to find a specfic thought
router
  .route("/:thoughtId")
  .get(getSpecficThought)
  .delete(deleteThought)
  .put(updateThought);

// Route to find all reactions
router
  .route("/:thoughtId/reactions")
  .post(newReaction);

// Route to find a specfic reaction
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

module.exports = router;
