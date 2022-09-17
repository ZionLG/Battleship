import { Ship } from "./ship";

const GameBoard = () => {
  const _board = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  const print = () => {
    for (let index = 0; index < 10; index++) {
      console.log(_board[index]);
    }
  };

  const _placeShipAt = (placeableShip, cordArray) => {
    cordArray.forEach((cord, index) => {
      const [row, column] = cord;
      _board[row][column] = [placeableShip, index];
    });
  };

  const placeShip = (...cordArray) => {
    let shipLength = cordArray.length;
    const placeableShip = Ship(shipLength);

    _placeShipAt(placeableShip, cordArray);
  };
  return { placeShip, print };
};

export { GameBoard };
