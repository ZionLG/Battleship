import { Ship } from "./ship";

const GameBoard = () => {
  const _board = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  let _missedShots = 0;
  let _allSunk = false;
  const getMissedShots = () => {
    return _missedShots;
  };
  const print = () => {
    for (let index = 0; index < 10; index++) {
      console.log(_board[index]);
    }
  };
  const getAllSunk = () => {
    return _allSunk;
  };
  const _placeShipAt = (placeableShip, cordArray) => {
    cordArray.forEach((cord, index) => {
      const [row, column] = cord;
      _board[row][column] = [placeableShip, index];
    });
  };
  const _checkLostGame = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (Array.isArray(_board[i][j])) {
          if (!_board[i][j][0].isSunk()) {
            return false;
          }
        }
      }
    }

    return true;
  };

  const receiveAttack = (cord) => {
    const [row, column] = cord;
    if (Array.isArray(_board[row][column])) {
      _board[row][column][0].hit(_board[row][column][1]);
      if (_checkLostGame()) {
        _allSunk = true;
      }
    } else {
      _board[row][column] = 1;
      _missedShots++;
    }
  };

  const placeShip = (...cordArray) => {
    let shipLength = cordArray.length;
    const placeableShip = Ship(shipLength);

    _placeShipAt(placeableShip, cordArray);
  };
  return { placeShip, print, getMissedShots, receiveAttack, getAllSunk };
};

export { GameBoard };
