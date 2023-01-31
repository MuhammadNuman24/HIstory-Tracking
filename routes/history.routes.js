const express = require("express");
const router = express.Router();
const history = require("../controllers/getOrderController.controller");
const transactionHistory = require("../controllers/getTransactionHistory.controllers");
const transferHistory = require("../controllers/getTransfer.controller");
// router.get(
//   "/history/:apiKey/:secKey/:paraPhrase",
//   history.getOrderHistoryController
// );
router.get("/orders", history.getOrderController);
// router.get(
//   "/transaction/:apiKey/:secKey/:paraPhrase",
//   transactionHistory.getTransactionHistoryController
// );
router.get("/transaction", transactionHistory.getTransactionHistoryController);
// router.get(
//   "/transfer/:apiKey/:secKey/:paraPhrase",
//   transferHistory.getTransferHistoryController
// );
router.get("/transfer", transferHistory.getTransferHistoryController);

module.exports = router;
