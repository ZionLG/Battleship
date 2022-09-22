const Ship = (length) => {
  let sunk = false;
  let hitBox = new Array(length).fill(0);
  const hit = (number) => {
    hitBox[number] = 1;
  };

  const isSunk = () => {
    return hitBox.every((element) => element === 1);
  };

  return { isSunk, hit };
};

export { Ship };
