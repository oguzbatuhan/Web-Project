// soru constructoru
function soru(sorutext, cevapsecenekleri, dogrucevap) {
  this.sorutext = sorutext;
  this.cevapsecenekleri = cevapsecenekleri;
  this.dogrucevap = dogrucevap;
}

soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogrucevap;
};
