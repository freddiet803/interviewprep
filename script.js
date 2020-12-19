//Use this file to implement Part One of your project
animal = {};
animal.username = 'Freddie';
animal['tagline'] = 'The shit';
noises = [];

animal['noises'] = noises;

//loop through animal object, count and log the properties

var count = 0;
for (var key in animal) {
  if (key == 'username') {
    console.log('Hi my name is ' + animal[key]);
  } else if (key == 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
  count++;
}
console.log(count);

//Arrays exercises, you basic b
noiseArray = ['screams'];
console.log(noiseArray[0]);

noiseArray.unshift('Howls');
noiseArray.push('barks');
console.log(noiseArray);
noiseArray[3] = 'the newest noise aka brittany';
console.log(noiseArray);
var lenofArray = noiseArray.length;
console.log(lenofArray);
indexCount = 0;
for (var i = 0; i < lenofArray; i++) {
  indexCount = i;
}
console.log(indexCount);

animal.noises = noiseArray;
console.log(animal);

animals = [];
animals.push(animal);
console.log(animals);

quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl'],
};
animals.push(quackers);
console.log(animals);

var friends = [];

animals.forEach((animal) => {
  friends.push(animal.username);
});
console.log(friends);

relationships = {};
relationships.friends = friends;
var matches = [];
relationships.matches = matches;
relationships.matches.push('Jade');

console.log(relationships);

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};

_.map = function (list, callback) {
  var newArray = [];
  for (var i = 0; i < list.length; i++) {
    newArray.push(callback(list[i], i, list));
  }
  return newArray;
  //_.each(list,function(v,i,list){
  //  newArray.push(callback(v,i,list))
  //})
};

_.each(['sally', 'georgie', 'momma'], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, ' is younger than ', list[i + 1]);
  } else {
    console.log(name, ' is the oldest');
  }
});

whofunction = function (list, callback) {
  list.forEach((item) => {
    callback(item);
  });
};

ourCb = function (anItem) {
  console.log(anItem + ' hey man cb');
};

whofunction(friends, ourCb);

const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function (item) {
  return `Broken ${item}`;
};

let brokenWeapons = weapons.map((weapon) => {
  return makeBroken(weapon);
});
newArray = _.map(weapons, makeBroken);
console.log(weapons);
console.log(brokenWeapons);
console.log(newArray);
