const router = require("express").Router();
const { Wine, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all wines and JOIN with user data
    const wineData = await Wine.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // converting data so the template can read it
    const wines = wineData.map((wine) => wine.get({ plain: true }));

    // Pass data and session into template
    res.render("homepage", {
      wines,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wine/:id", async (req, res) => {
  try {
    const wineData = await Wine.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const wine = wineData.get({ plain: true });

    res.render("wine", {
      ...wine,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Wine }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route

  if (req.session.loggedIn) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
