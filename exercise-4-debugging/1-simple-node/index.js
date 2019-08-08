const axios = require("axios");
const API_BASE = "https://lifx-lamp-api.azurewebsites.net/api";

const App = {
  /**
   * Initalize the page and websocket connection
   */
  async init() {
    const result = axios
      .get(`${API_BASE}/setColor?color=blue`)
      .then(response => {
        response.data.results.forEach(item => {
          console.log(item);
          // update the lamp color
        });
      })
      .catch(err => {
        console.log("Unable to connect to the LAMP API");
      });
  }
};

App.init();
