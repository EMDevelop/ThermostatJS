class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MIN_TEMPERATURE = 10;
    this.MAX_TEMPERATURE = 25;
  }
  getTemp() {
    return this.temperature;
  }
  up(change) {
    this._isMaxTemp(this.temperature - change)
      ? (this.temperature = this.MAX_TEMPERATURE)
      : (this.temperature += change);
  }
  down(change) {
    this._isMinTemp(this.temperature - change)
      ? (this.temperature = this.MIN_TEMPERATURE)
      : (this.temperature -= change);
  }

  _isMinTemp(change) {
    return change < this.MIN_TEMPERATURE;
  }

  _isMaxTemp(change) {
    return change < this.MAX_TEMPERATURE;
  }
}
