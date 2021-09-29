class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.POWER_SAVE = true;
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

  togglePowerSave() {
    this.POWER_SAVE = !this.POWER_SAVE;
    this.POWER_SAVE ? (this.MAX_TEMPERATURE = 25) : (this.MAX_TEMPERATURE = 32);
  }

  resetTemp() {
    this.temperature = this.DEFAULT_TEMPERATURE = 20;
  }

  getUsage() {
    if (this.temperature < 18) return "low-usage";
    if (this.temperature <= 25) return "medium-usage";
  }

  _isMinTemp(change) {
    return change < this.MIN_TEMPERATURE;
  }

  _isMaxTemp(change) {
    return change < this.MAX_TEMPERATURE;
  }
}
