// prototypes

console.log([]);
console.log(new Array());

function comment(title, body, username) {
  this.title = title;
  this.body = body;
  this.username = username;
  this.cretedAt = Date.now();

  console.log(this);
}

comment.prototype.display = function () {
  return this.title;
};
comment.prototype.get_username = function () {
  return this.username;
};

const c1 = new comment("Programlama", "JavaScript", "Oğuz Batuhan");
const c2 = new comment("programing", "JavaScript", "Oguz Batuhan");
