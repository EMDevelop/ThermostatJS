document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();

  const updateTemp = () => {
    document.querySelector("#temperature").innerText = thermostat.temperature;
    document.querySelector("#temperature").className = thermostat.getUsage();
  };

  updateTemp();

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up(1);
    updateTemp();
  });

  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down(1);
    updateTemp();
  });

  document.querySelector("#temperature-reset").addEventListener("click", () => {
    thermostat.resetTemp();
    updateTemp();
  });

  document.querySelector("#toggle-psm").addEventListener("click", () => {
    thermostat.togglePowerSave();
    document.querySelector("#power-saving-status").innerText =
      thermostat.getPowerSavingMode();
  });
});
