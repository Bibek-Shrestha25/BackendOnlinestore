const CategoryModel = require("../Model/categoryModel");

//insert into DB
exports.addCategory = async (req, res) => {
  //let categoryobj = new CategoryModel({
  // category_name:req.body.categoryobj.save()
  // })
  let CategoryObj = await CategoryModel.create({
    category_name: req.body.category_name,
  });
  //error
  if (!CategoryObj) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(CategoryObj);
};

exports.getCategoryDetails = async (req, res) => {
  let category = await CategoryModel.findById(req.params.id);
  if (!category) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(category);
};
//update category
exports.updateCategory = async (req, res) => {
  let categoryToUpdate = await CategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      category_name: req.body.category_name,
    },
    { new: true }
  );
  if (!categoryToUpdate) {
    return res.status(400).json({ erorr: "Failed to update" });
  }
  res.send(categoryToUpdate);
};

//delet category
exports.deletCategory = (req, res) => {
  CategoryModel.findByIdAndDelete(req.params.id)
    .then((deletedCategory) => {
      if (!deletedCategory) {
        return res.status(400).json({ error: "Category not found" });
      }
      res.send({ message: "Category deleted successfully" });
    })
    .catch((err) => res.status(400).json({ error: err }));
};
