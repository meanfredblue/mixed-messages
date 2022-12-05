const data = {
  day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  time: ['morning', 'at midday', 'afternoon', 'night', 'at midnight'],
  do: ['go grocery shopping', 'pay bills', 'go to McDonald\'s', 'excercise', 'get a hair cut', 'buy a lottery ticket', 'take a nap', 'play a game']
}

const getRandomStringFromArray = (array) => {
  const index = Math.floor(Math.random()*array.length);
  return array[index];
}

const outputMessage = () => {
  console.log('You should ' + getRandomStringFromArray(data.do) + ' on ' + getRandomStringFromArray(data.day) + ' ' + getRandomStringFromArray(data.time) + '.');
}

outputMessage();