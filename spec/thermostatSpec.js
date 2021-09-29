describe("Thermostat", function () {
  beforeEach(function () {
    thermostat = new Thermostat();
  });
  it("Starts at 20", function () {
    expect(thermostat.getTemp()).toBe(20);
  });
  it("Temperature can be increased", function () {
    thermostat.up(5);
    expect(thermostat.getTemp()).toBe(25);
  });
  it("Temperature can be decreased", function () {
    thermostat.down(5);
    expect(thermostat.getTemp()).toBe(15);
  });

  it("Temperature cannot go below 10", function () {
    thermostat.down(10);
    expect(thermostat.getTemp()).toBe(10);
  });

  it("Power Save On, max 25", function () {
    thermostat.up(50);
    expect(thermostat.getTemp()).toBe(25);
  });
});
