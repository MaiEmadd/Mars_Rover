const Mars_rover = require('./rover');

describe("Mars_rover tests", () => {
  let myMars_rover;

  beforeEach(function() {
    myMars_rover = new Mars_rover([4,2], 'East', 'FLFFFRFLB');
  });
  test("getCommand function", () => {
    expect(myMars_rover.getCommands('FLFFRFLB')).toStrictEqual(['F','L','F','F','R','F','L','B'],1);
  });
  test("getCommand function", () => {
    expect(myMars_rover.getCommands('LLFFF')).toStrictEqual(['L','L','F','F','F'],1);
  });
});
  






