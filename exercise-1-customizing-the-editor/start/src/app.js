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
    connection.on("colorChanged", hex => {https://nodejs.org/en/
      // update the bulb color
      bulb.style = `fill: #${currentColor};`;
      currentColor.textContent = `#${currentColor}`;
    });

    // start the websocket connection
    await connection.start();

    goButton.addEventListener("click", async () => {
      const color = colorInput.value;
      this.setColor(color);
    });

    goButton.addEventListener("click", async () => {
      const color = colorInput.value;
      this.setColor(color);
    });
  }

  /**
   * Calls the API to update the lamp color
   * @param {string} color
   */
  async setColor(color) {
    await fetch(
      `${API_BASE}/setColor?color=${color.substring(1, color.length)}`
    );
  }

  /**
   * Creates the color circle HTML element
   * @param {string} color
   */
  createColumn(color) {
    let column = document.createElement("div");
    column.className = "column is-1 pastColor drop";
    column.style = `background-color: #${color}`;
    column.addEventListener("click", () => {
      this.setColor(color);
    });

    return column;
  }
}

new App().init();
