const bulb = require("../bulb");

module.exports = async function(context, req) {
  const color = req.query.color;
  if (color) {
    try {
      const result = await bulb.setColor(color);
      context.res = {
        body: result
      };
    } catch (err) {
      context.res = {
        body: { message: "Unable to access the LIFX Lamp API " }
      };
    }
  } else {
    context.res = {
      status: 500,
      body: "Please pass the color parameter"
    };
  }
};
