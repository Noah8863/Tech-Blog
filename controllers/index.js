//Outer Index
const router = require("express").Router();
const Review = require("../models/newpost");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  const result = await Review.findAll({});
  const allReviews = result.map((review) => {
    return review.get({
      plain: true,
    });
  });
  console.log(allReviews);
  res.render("homePage", {
    reviews: allReviews,
  });
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/newpost", (req, res) => {
  res.render("newpost", {
    logged_in: req.session.logged_in,
    user_name: req.session.user_name,
  });
});



module.exports = router;