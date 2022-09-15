import { Ship } from "./ship";

const GameBoard = () => {
  const board = Array(10)
    .fill(0)
    .map((x) => Array(10).fill(0));

  const placeShip = (cordArray) => {
    const placeableShip = Ship(3);
  };
  return { print };
};

export { GameBoard };
