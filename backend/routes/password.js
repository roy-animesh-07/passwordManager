const express = require("express");
const {handlegetallpasswords,handlepasswordsave} = require("../controllers/password")

const router = express.Router();

router.post("/save", handlepasswordsave);
router.get("/allpasswords",handlegetallpasswords);

module.exports = router;