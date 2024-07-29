const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  createUserThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);
// /api/thought/:userId
router.route('/:userId').post(createUserThought);
// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reaction').post(addReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;