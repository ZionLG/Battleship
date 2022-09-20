const Ship = (length) => {
  let sunk = false;
  let hitBox = new Array(length).fill(0);

  const hit = (number) => {
    hitBox[number] = 1;
  };
  const isSunk = () => {
    const result = hitBox.every((element) => {
      if (element === 1) {
        sunk = true;
      }
    });

    return sunk;
  };

  return { isSunk, hit };
};

export { Ship };
