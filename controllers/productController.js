const productSchema = require("../models/productModel");
const { getAllModels, getModelById,createModel, deleteModelById, updateModelById } = require('../services/mongooseCrud'); // Adjust the path as needed

exports.createProduct = async (req, res) => {
    const input =req.body;
    const productToBeCreated = await createModel(
        productSchema,
        input,
    );
   return res.status(201).json({
        message: "Product created successfully",
        data: productToBeCreated,
})
};
exports.getAllProducts = async (req, res) => {
    const productToBeRetrieved = await getAllModels(
        productSchema,
    );
    if(!productToBeRetrieved){
        return res.status(404).json({
            message: "No products found",
            success: false,
        });
    };
    return res.status(200).json({
        message: "Products retrieved successfully",
        data: productToBeRetrieved,
    })
};
exports.getProductById = async(req,res,next) =>{
    const {id}=req.params;
    const populatedKeys = "category";
    const productToBeRetrieved = await getModelById(
        productSchema,
        id,
        populatedKeys,
    );
    if(!productToBeRetrieved){
        return res.status(404).json({
            message: "Product not found",
            success: false,
        });
    };
    return res.status(200).json({
        message: "Product retrieved successfully",
        data: productToBeRetrieved,
    })
};
exports.updateProductById = async(req,res,next) =>{
    const {id} = req.params;
    const inputs = req.body;
    const updatedProduct = await updateModelById(
        productSchema,
        id,
        inputs,
    );
    if(!updatedProduct){
        return res.status(404).json({
            message: 'Product not found',
            success: false,
        });
    }
    return res.status(200).json({
        message: 'Product updated successfully',
        data: updatedProduct
    });
};

exports.deleteProductById = async (req,res,next) => {
    const {id} = req.params;
    const ProductToBeDeleted = await deleteModelById(
        productSchema,
        id,
    );
    return res.json("Deleted Successfully");
};