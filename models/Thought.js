const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAT: {
      type: Date,
      default: Date.now,
      get: function(timestamp) {
        // Format the timestamp as desired (e.g., MM/DD/YYYY)
        const formattedDate = timestamp.toLocaleDateString('en-US');
        return formattedDate;
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;