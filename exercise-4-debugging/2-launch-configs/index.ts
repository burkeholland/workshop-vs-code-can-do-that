const API_BASE = "https://lifx-lamp-api.azurewebsites.net/api";
import axios from "axios";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function setColor(color) {
  axios
    .get(`${API_BASE}/setColor?color=${color}`)
    .then(() => {
      console.log(`The lamp color has been changed to: ${color}`);
    })
    .catch(err => {
      console.log(err.message);
    });
}

readline.question("Enter a color: ", async color => {
  await setColor(color);
  readline.close();
});
