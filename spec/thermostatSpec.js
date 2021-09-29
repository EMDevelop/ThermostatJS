describe("Thermostat", function () {
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  it("Starts at 20", function () {
    console.log("test 1");
    expect(thermostat.getTemp()).toBe(20);
  });
  it("Temperature can be increased", function () {
    console.log("test 2");
    thermostat.up(10);
    expect(thermostat.getTemp()).toBe(30);
  });
  it("Temperature can be decreased", function () {
    console.log("test 3");
    thermostat.down(5);
    expect(thermostat.getTemp()).toBe(15);
  });

  it("Temperature cannot go below 10", function () {
    console.log(thermostat.getTemp());
    thermostat.down(10);
    expect(thermostat.getTemp()).toBe(10);
  });
});
