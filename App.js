const express = require("express");
const app = express();
const couponCode = require("coupon-code");
const couponRouter=require("./couponRoute")

app.use(express.json());


app.use("/",couponRouter);
app.listen(4000, () => {
  console.log("Port is working at 4000");
});
