const express = require("express");
const {handlegetallpasswords,handlepasswordsave,handleDelete} = require("../controllers/password")

const router = express.Router();

router.post("/save", handlepasswordsave);
router.get("/allpasswords",handlegetallpasswords);
router.delete("/delete",handleDelete);

module.exports = router;