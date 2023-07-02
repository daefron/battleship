const Ship = (type) => {
  this.type = type;
  this.length = typeFind(type);
  function typeFind(type) {
    if (type === "Carrier") {
      return (length = 5);
    } else if (type === "Battleship") {
      return (length = 4);
    } else if (type === "Destroyer" || type === "Submarine") {
      return (length = 3);
    } else if (type === "Patrol Boat") {
      return (length = 2);
    }
  }
  return { type, length };
};

const Gameboard = (board) => {
  if (this.board === undefined) {
    this.board = emptyBoard();
  } else this.board = board;
  function emptyBoard() {
    let grid = [];
    for (let i = 0; i < 100; i++) {
      grid.push("");
    }
    this.shotValidity = true;
    return (board = grid);
  }
  const placeShip = (board, ship, position, axis) => {
    for (let i = 0; i < 100; i++) {
      if (i === position) {
        let shipChecker = (shipLength = Ship(ship).length);
        let edgeChecker = 0;
        for (shipPart = 0; shipPart < shipLength; shipPart++) {
          if (board[i] === "") {
            shipChecker--;
          }
          if (axis === "x") {
            if (shipPart !== shipLength - 1 && (i + 1) % 10 === 0) {
              edgeChecker = 1;
            } else i++;
          } else if (axis === "y") {
            i = i + 10;
          }
        }
        if (shipChecker == 0 && edgeChecker == 0) {
          for (shipPart = 0; shipPart < shipLength; shipPart++) {
            if (axis === "x") {
              board.splice(position + shipPart, 1, Ship(ship).type + shipPart);
            } else if (axis === "y") {
              board.splice(
                position + shipPart * 10,
                1,
                Ship(ship).type + shipPart
              );
            }
          }
          return (shotValidity = true);
        } else return (shotValidity = false);
      }
    }
    this.shotValidity = shotValidity;
    return (board = board);
  };
  const receiveAttack = (board, attackPosition) => {
    if (board[attackPosition] !== "x" && board[attackPosition] !== "") {
      console.log("Hit");
      board.splice(attackPosition, 1, "x");
    } else if (board[attackPosition] == "x") {
      console.log("Already attacked position");
    } else {
      console.log("Missed");
      board.splice(attackPosition, 1, "x");
    }
  };
  const shipTracker = (board) => {
    let shipsLeft = 5;
    const shipTypes = [
      "Carrier",
      "Battleship",
      "Destroyer",
      "Submarine",
      "Patrol Boat",
    ];
    for (let i = 0; i < 5; i++) {
      let shipLength = Ship(shipTypes[i]).length;
      let shipHP = shipLength;
      for (let shipPart = 0; shipPart < shipLength; shipPart++) {
        if (board.includes(shipTypes[i] + shipPart)) {
        } else {
          shipHP--;
        }
      }
      if (shipHP == 0) {
        shipsLeft--;
      }
      console.log("Hits remaining for " + shipTypes[i] + ": " + shipHP);
    }
    if (shipsLeft == 0) {
      console.log("All ships have been destroyed");
    }
  };
  return { board, shotValidity, emptyBoard, placeShip, receiveAttack, shipTracker };
};

const Player = () => {
  this.board = board;
  const sendAttack = () => {};
  const turnSwitch = () => {};
  return { board };
};

const oneBoard = Gameboard();
oneBoard.placeShip(oneBoard.board, "Battleship", 35, "x");
oneBoard.placeShip(oneBoard.board, "Destroyer", 92, "x");
oneBoard.placeShip(oneBoard.board, "Patrol Boat", 5, "y");
oneBoard.placeShip(oneBoard.board, "Submarine", 22, "y");
oneBoard.placeShip(oneBoard.board, "Carrier", 58, "y");
console.log(oneBoard.board);
oneBoard.receiveAttack(oneBoard.board, 35);
oneBoard.receiveAttack(oneBoard.board, 36);
oneBoard.receiveAttack(oneBoard.board, 38);
oneBoard.receiveAttack(oneBoard.board, 37);
console.log(oneBoard.board);
oneBoard.shipTracker(oneBoard.board);
