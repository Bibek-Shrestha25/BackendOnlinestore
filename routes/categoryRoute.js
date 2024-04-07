const {
  addCategory,
  getCategoryDetails,
  updateCategory,
  deletCategory,
} = require("../Controller/categoryController");

const router = require("express").Router();

//endpoints
router.post("/addcategory", addCategory);

// router.get("/getallcategories", getAllCategories);
router.get("/category/:id", getCategoryDetails);
router.put("/Updatecategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deletCategory);
module.exports = router;
