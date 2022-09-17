import { GameBoard } from "../src/gameBoard";

test("check length", () => {
  expect(GameBoard().placeShip([1, 3], [1, 5]).length).toBe(3);
  expect(GameBoard().placeShip([1, 1], [3, 1]).length).toBe(3);
  expect(GameBoard().placeShip([1, 1], [3, 1]).length).toBe(3);
  expect(GameBoard().placeShip([1, 2], [1, 2]).length).toBe(1);
  expect(GameBoard().placeShip([1, 3], [1, 7]).length).toBe(5);
});
