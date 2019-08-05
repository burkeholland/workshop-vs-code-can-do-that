const API_BASE = "https://lifx-lamp-api.azurewebsites.net/api";

// define variables
let app = document.getElementById("app");
let goButton = document.getElementById("goButton");
let colorInput = document.getElementById("colorInput");
let currentColor = document.getElementById("currentColor");
let bulb = document.getElementById("bulb");

class App {
  /**
   * Initalize the page and websocket connection
   */
  async init() {
    // initialize signalR hub (websockets connection)
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(API_BASE)
      .build();

    // receives the "colorChanged" web socket event
    connection.on("colorChanged", hex => {
      // update the bulb color
      bulb.style = `fill: #${hex};`;
      currentColor.textContent = `#${hex}`;
    });

    // start the websocket connection
    await connection.start();

    goButton.addEventListener("click", async () => {
      const color = colorInput.value;
      await this.setColor(color);
    });
  }

  /**
   * Calls the API to update the lamp color
   * @param {string} color
   */
  async setColor(color) {
    await fetch(
      `/set?color=${color.substring(1, color.length)}`
    );
  }
}

new App().init();
