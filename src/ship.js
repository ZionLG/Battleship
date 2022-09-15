const Ship = (length) => {
  let sunk = false;
  let hitBox = new Array(length).fill(0);

  const hit = (number) => {
    hitBox[number] = 1;
  };

  const isSunk = () => {
    if (hitBox.length === length) {
      sunk = true;
    }
    return sunk;
  };

  return { isSunk, hit };
};

export { Ship };
