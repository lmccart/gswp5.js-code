function setup() {
  var yourWeight = 132;
  var marsWeight = calculateMars(yourWeight);
  print(marsWeight);
}

function calculateMars(w) {
  var newWeight = w * 0.38;
  return newWeight;
}