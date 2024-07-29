const { User, Thought } = require('../models');

module.exports = {

  // Get all user with friends
  async getUser(req, res) {
    try {
      console.log('hola mundo');
      const users = await User.find().populate('friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a user with friends (list)
  async getUserFriends(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create friend for an existing user
  async createFriend(req, res) {
    try {
        const user = await User.findById(req.params.userId);
          if (user) {
              console.log('User found');
              // Crear un nuevo documento de pensamiento
              const newFriend = new User({
                  userName: req.body.userName,
                  email: req.body.email,
                  userId: req.params.userId
                  });
              // Save the new thought
              await newFriend.save();
              // Add the reference of the new Thought to the user 
              user.friends.push(newFriend._id);
              // Save chenges at User
              await user.save();
              console.log('¡New friend added!');
              res.json(user);
          } else {
              console.log('User not found');
          }
      } catch (err) {
               res.status(500).json(err);
               }
    },

  // Delete a Friend of the list
    async deleteFriend(req, res) {
        try {
            console.log('Delete in progress');
            console.log(req.params);
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          );    
          if (!user) {
            return res
              .status(404)
              .json({ message: 'User not found' });
          }
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

};