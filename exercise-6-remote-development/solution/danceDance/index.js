const bulb = require("../bulb");

module.exports = async function(context, req) {
  // generate random hex color
  // taken from: https://www.paulirish.com/2009/random-hex-color-code-snippets/
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  try {
    const result = await bulb.setColor(hex);

    context.res = {
      body: { color: hex }
    };
  } catch (err) {
    context.res = {
      body: { message: "LIFX Lamp API is unavailable" }
    };
  }
};
