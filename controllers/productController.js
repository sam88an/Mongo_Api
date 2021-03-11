const Product = require("../models/Product");

exports.CreateProduct = async (req, res) => {
  try {
    let producto;

    // Creamos nuestro producto
    product = new Product(req.body);

    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Have some error when create product...");
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Have some error when get all product...");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, category, description, price } = req.body;
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "No exist product..." });
    }

    product.name = name;
    product.category = category;
    product.description = description;
    product.price = price;

    product = await Product.findOneAndUpdate({ _id: req.params.id }, product, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Have some error when update product");
  }
};

exports.getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "No exist product..." });
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Have some error when get product id...");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "No exist product..." });
    }

    await Product.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Delete product successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).send("Have some error....");
  }
};
