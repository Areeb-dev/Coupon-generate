const express = require("express");
const router = express.Router();

function generateCoupon(len) {
  const regex =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return [...Array(len)].reduce(
    (a) => a + regex[~~(Math.random() * regex.length)],
    ""
  );
}

router.post("/", (req, res) => {
  let { body } = req;
  let range = body?.range;
  try {
    let coupons = [];

    while (coupons.length != range) {
      let random = generateCoupon(9);
      let coupon =
        random[0] +
        random[1] +
        random[2] +
        "-" +
        random[3] +
        random[4] +
        random[5] +
        "-" +
        random[6] +
        random[7] +
        random[8];
      if (!coupons.includes(coupon)) {
        coupons.push(coupon);
      }
    }

    return res.send({
      status: 200,
      sucess: true,
      data: coupons,
    });
  } catch (e) {
    console.log(e);
    return res.send({ status: 500, sucess: false, error: "server Error" });
  }
});
module.exports = router;
