const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const appReactions = [
  'love',
  'haha',
  'wow',
  'sad',
  'funny',
  'insightful',
  'curius',
  'lie',
  'always',
  'like',
  'yes',
  'never',
  'jaja',
  'never',
  'easy',
  'happy',
  'angry',
  'snif',
];

const appThoughts = [
    'Social media is not a media The key is to listen engage, and build relationships',
    'Engage rather than sell … Work as a co-creator not a marketer',
    'By not tweeting you are tweeting. You are sending a message',
    'Activate your fans do not just collect them like baseball cards',
    'Focus on how to be social not on how to do social',
    'Social Media puts the public into PR and the market into marketing',
    'Privacy is dead and social media hold the smoking gun',
    'When you say it it is marketing When they say it it is social proof',
    'Conversations are happening whether you are there or not',
];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;


const getRandomThoughts = () => {
  results = getRandomArrItem(appThoughts)
    return results;
};

// Function to generate random reactions that we can add to thought object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(appReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomReactions };


