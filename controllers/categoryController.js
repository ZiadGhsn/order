const categorySchema = require('../models/categoryModel');
const { getAllModels, getModelById,createModel, deleteModelById, updateModelById } = require('../services/mongooseCrud'); // Adjust the path as needed

exports.createCategory = async (req,res,next) => {
    const inputs =req.body;
    const newCategory = await createModel(
        categorySchema,
        inputs
    );
    return res.status(200).json({
        message: 'Category created successfully',
        data: newCategory
    });
};

exports.getAllCategories = async (req,res,next) => {
    const categoriesToBeRetrieved = await getAllCategories(
        categorySchema,
    );
    if(!categoriesToBeRetrieved){
        return res.status(404).json({
            message: 'No categories found',
            success:false,
        });
    }
    return res.status(200).json({
        message: 'Categories retrieved successfully',
        data: categoriesToBeRetrieved
    });
};

exports.getCategoryById = async (req,res,next) => {
    const {id} = req.params;
    const categoryToBeRetrieved = await getModelById(
        categorySchema,
        id
    );
    if(!categoryToBeRetrieved){
        return res.status(404).json({
            message: 'Category not found',
            success: false,
        });
    };
    return res.status(200).json({
        message: 'Category retrieved successfully',
        data: categoryToBeRetrieved
    });
};

exports.updateCategoryById = async(req,res,next) =>{
    const {id} = req.params;
    const inputs = req.body;
    const updatedCategory = await updateModelById(
        categorySchema,
        id,
        inputs,
    );
    if(!updatedCategory){
        return res.status(404).json({
            message: 'Category not found',
            success: false,
        });
    }
    return res.status(200).json({
        message: 'Category updated successfully',
        data: updatedCategory
    });
};

exports.deleteCategoryById = async (req,res,next) => {
    const {id} = req.params;
    const categoryToBeDeleted = await deleteModelById(
        categorySchema,
        id,
    );
    return res.json("Deleted Successfully");
};