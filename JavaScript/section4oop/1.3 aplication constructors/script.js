// aplications : construstor

// player constructor

/*

    const gamer1 = new player("user1");
    const gamer2 = new player("user2");
    const gamer3 = new player("user3");

    gamer1.start(); // user1 start game
    gamer2.start(); // user2 start game
    gamer3.start(); // user3 start game

    gamer1.add_score(50);
    gamer1_show_score(); // user1 score 50

*/

function player(userName) {
  this.userName = userName;
  this.score = 0;
  this.start = function () {
    return `${this.userName} game over`;
  };
  this.stop = function () {
    return `${this.userName} stop game`;
  };
  this.pause = function () {
    return `${this.userName} stopped the game`;
  };
  this.add_score = function (val) {
    this.score += val;
  };
  this.show_score = function () {
    return `${this.userName} gamer score ${this.score}`;
  };
}

const user1 = new player("user1");
const user2 = new player("user2");
const user3 = new player("user3");

console.log(user1.start());
console.log(user2.stop());
console.log(user3.pause());

user1.add_score(50);
user2.add_score(80);
user2.add_score(5);
console.log(user1.show_score());
console.log(user2.show_score());
console.log(user3.show_score());
