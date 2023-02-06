const router = require("express").Router();
const { Wine, Order } = require("../../models");
// const sequelize = require('../../config/connection');
//  const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
  Wine.findAll({
    attributes: ["name", "taste", "price", "brand", "order_id", "wine_id"],
    include: [
      {
        model: Order,
        attributes: ["id", "order_date", "order_status"],
      },
    ],
  });
});

module.exports = router;
