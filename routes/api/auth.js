const express = require("express");

const router = express.Router();

//@router   GET api/Auth
//@desc     Test router
//@access   Public

router.get("/", (req, res) => res.send("Auth Route"));

module.exports = router;
