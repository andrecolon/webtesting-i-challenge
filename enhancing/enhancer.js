module.exports = {
  success,
  fail,
  repair,
  get,
};
//a success(item) method that accepts an item object and returns a new item object 
// modified according to the rules defined by the client for enhancement success.
function success(item) {
  item.enhancement !== 20 ? item.enhancement++ : item.enhancement;
  return { ...item };
}


//a fail(item) method that accepts an item object and returns 
// a new item object modified according to the rules defined by the client for enhancement failure.
function fail(item) {
  if (item.enhancement < 15) {
    item.enhancement -= 5;
  } else if (item.enhancement > 15 && item.enhancement <= 16) {
    item.enhancement -= 10;
  } else if (item.enhancement > 16) {
    item.enhancement--;
  }

  return { ...item };
}


//a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. 
//This method is the simplest of the three and would be a good starting point on this project.
function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`;
  }

  return { ...item };
}