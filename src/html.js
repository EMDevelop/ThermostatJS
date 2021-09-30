document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();

  const updateTemp = () =>
    (document.querySelector("#temperature").innerText = thermostat.temperature);

  document.querySelector("#temperature").innerText = thermostat.temperature;

  document.querySelector("#temperature-up").addEventListener("click", () => {
    thermostat.up(1);
    updateTemp();
  });
  document.querySelector("#temperature-down").addEventListener("click", () => {
    thermostat.down(1);
    updateTemp();
  });
});
