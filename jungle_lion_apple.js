//Decide a mission
let mission = 'Help the Homeless';

//Establish what help would look like
let help = [
 'Donate money or food to homeless shelters',
 'Volunteer at a food pantry or soup kitchen',
 'Participate in a Clothing or Blanket Drive',
 'Organize a food or clothing drive',
 'Help out at a Homeless Outreach event',
 'Provide concrete help to those living on the streets'
];

//Helper Function to push help ideas to friends
function pushHelpToFriends(helpArray) {
  helpArray.forEach(function(idea) {
    console.log(`Hey! Let's ${idea} to help out with our mission to ${mission}. Will you join me?`);
  });
}

//Let's Start Paying It Forward

//1 - Start by helping myself
console.log(`I'm starting to Pay It Forward and helping with the mission to ${mission}`);

//2 - Encourage my family to help
console.log('I'm encouraging my family to help with the mission to ' + mission + '. Here are some ways we can help:');
pushHelpToFriends(help);

//3 - Encourage my friends to help
console.log('I'm encouraging my friends to help with the mission to ' + mission + '. Here are some ways we can help:');
pushHelpToFriends(help);

//4 - Get my community involved
console.log('I'm getting my community involved to help with the mission to ' + mission + '. Here are some ways we can help:');
pushHelpToFriends(help);

//5 - Spread the word on social media
console.log(`I'm spreading the word about the mission to ${mission} on social media. Join me in helping make a difference! Here are some ways we can help:`);
pushHelpToFriends(help);

//6 - Share the mission with local organizations
console.log(`I'm letting local organizations know about the mission to ${mission} and how they can help. Here are some ways we can help:`);
pushHelpToFriends(help);

//7 - Reach out to influencers and celebrities
console.log(`I'm reaching out to influencers and celebrities about the mission to ${mission} and asking them to help spread the word. Here are some ways we can help:`);
pushHelpToFriends(help);

//8 - Encourage others to join the mission
console.log(`I'm encouraging others to join me in the mission to ${mission}. Here are some ways we can help:`);
pushHelpToFriends(help);