var stats;

function preload() {
  stats = loadTable("ortiz.csv");
}

function setup() {
  for (var i = 0; i < stats.getRowCount(); i++) {
    // Gets the value from row i, column 0 in the file
    var year = stats.get(i, 0);
    // Gets the value from row i, column 1
    var homeRuns = stats.get(i, 1);   
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3); 
    print(year, homeRuns, rbi, average);
  }
}