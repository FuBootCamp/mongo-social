const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts,  getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('user');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thought');
    }

  // Create empty array to hold the thought
  const thoughtArray = [];

  // Create 5 thought with 5 reactions each
  for (let i = 0; i < 5; i++) { 
      const thoughtText = getRandomThoughts();
      const username = getRandomName();
      // Get 5 random reactions 
      const reactions = getRandomReactions(5);
      // Add a row to the array
      thoughtArray.push({
          thoughtText,
          username,
          reactions,
    });
  }


  // Add students to the collection and await the results
  const thoughtData = await Thought.create(thoughtArray);

  // Add user to the collection and await the results
  await User.create({
    userName: 'Juan Pérez',
    email:    'juan.perez@gmail.com',
    thoughts: [...thoughtData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughtArray);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
