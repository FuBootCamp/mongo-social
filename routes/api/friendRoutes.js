const router = require('express').Router();
const {
  getUser,
  getUserFriends,
  createFriend,
  deleteFriend,
} = require('../../controllers/friendControlller');

// /api/friends
router
    .route('/')
    .get(getUser);

// /api/friends/:userId
router
   .route('/:userId')
   .get(getUserFriends)
   .post(createFriend);

// /api/friends/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').delete(deleteFriend);

module.exports = router;