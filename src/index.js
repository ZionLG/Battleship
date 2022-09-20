import "./main.scss";
import { GameBoard } from "./gameBoard";

const myGame = GameBoard();
myGame.placeShip([1, 0], [2, 0], [3, 0]);
myGame.receiveAttack([1, 0]);

myGame.print();
console.log(myGame.getAllSunk());
