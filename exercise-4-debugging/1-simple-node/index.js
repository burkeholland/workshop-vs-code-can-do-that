const axios = require("axios");
const API_BASE = "https://lifx-lamp-api.azurewebsites.net/api";

const App = {
  /**
   * Initalize the page and websocket connection
   */
  init() {
    let result = axios.get(`${API_BASE}/setColor?color=blue`).then(response => {
      // do something with the data here
      response.data.results.forEach(item => {
        // update the lamp color
      });
    });
  }
};

App.init();
