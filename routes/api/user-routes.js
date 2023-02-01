const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSpecficUser,
  newUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Route to get all users
router
  .route("/")
  .get(getAllUsers);

// Routes to find/delete user
router
  .route("/:userId")
  .get(getSpecficUser)
  .delete(deleteUser)
  .put(updateUser);

// Routes to find friends
router
  .route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
