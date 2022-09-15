const Ship = (length) => {
  let sunk = false;
  let hitBox = [];

  const hit = (number) => {
    hitBox.push(number);
  };
  const isSunk = () => {
    if (hitBox.length === length) {
      sunk = true;
    }
    return sunk;
  };

  return { isSunk, hit };
};
