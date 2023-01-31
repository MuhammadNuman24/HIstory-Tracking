// get History
// const api = require("../config/connectAPI");
const { SpotClient } = require("bitget-api");

// client = api.client;
const getOrderController = async (req, res) => {
  const client = new SpotClient({
    apiKey: req.query.apiKey,
    apiSecret: req.query.secretKey,
    apiPass: req.query.paraPhrase,
  });
  console.log(req.query.ApiKey)

  try {
    client
    .getOrder("IXTUSDT_SPBL", req.query.orderId, req.query.clientOrderId)
    .then((result) => {
      res.send(result);
      console.log("GET: getOrders", result);
      })
      .catch((err) => {
        console.error("ERROR: getOrders", err);
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getOrderController };
