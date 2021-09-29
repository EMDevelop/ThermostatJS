class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MIN_TEMPERATURE = 10;
  }
  getTemp() {
    return this.temperature;
  }
  up(change) {
    this.temperature += change;
  }
  down(change) {
    this._isMinTemp(this.temperature - change)
      ? (this.temperature = this.MIN_TEMPERATURE)
      : (this.temperature -= change);
  }

  _isMinTemp(input) {
    // debugger;
    return input < this.MIN_TEMPERATURE;
  }
}
