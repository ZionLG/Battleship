import "./main.scss";
import { GameBoard } from "./gameBoard";

const myGame = GameBoard();
myGame.placeShip([1, 1], [2, 1], [3, 1]);
myGame.receiveAttack([1, 1]);
myGame.receiveAttack([2, 1]);
myGame.receiveAttack([3, 1]);

myGame.print();
console.log(myGame.getAllSunk());
