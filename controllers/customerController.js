const customerSchema = require("../models/customerModel");
const { getAllModels, getModelById,createModel, deleteModelById, updateModelById } = require('../services/mongooseCrud'); // Adjust the path as needed

exports.createCustomer = async(req,res,next) => {
    const inputs= req.body;
    const customerToBeCreatead = await createModel(
        customerSchema,
        inputs,
    );
   return res.status(201).json({
        message: "Customer created successfully",
        data: customerToBeCreatead,
    });
};
exports.getAllCustomers = async(req, res, next) => {
    const customersToBeRetrieved = await getAllModels(
        customerSchema,
    );
    if(!customersToBeRetrieved){
        return res.status(404).json({
            message: "No customers found",
            success:false,
        });
    };
    return res.status(200).json({
        message: "Customers retrieved successfully",
        data: customersToBeRetrieved,
    });
};
exports.getCustomerById = async(req, res, next) => {
    const {id} = req.params;
    const customerToBeRetrieved = await getModelById(
        customerSchema,
        id,
    );
    if(!customerToBeRetrieved){
        return res.status(404).json({
            message: "Customer not found",
            success: false,
        });
    };
    return res.status(200).json({
        message: "Customer retrieved successfully",
        data: customerToBeRetrieved,
    });
};
exports.updateCustomerById = async(req, res, next) => {
    const {id} = req.params;
    const inputs= req.body;
    const customerToBeUpdated = await updateModelById(
        customerSchema,
        id,
        inputs,
    );
    if(!customerToBeUpdated){
        return res.status(404).json({
            message: "Customer not found",
            success: false,
        });
    };
    return res.status(200).json({
        message: "Customer updated successfully",
        data: customerToBeUpdated,
    });
};
exports.deleteCustomerById = async(req, res, next) => {
    const {id} = req.params;
    const customerToBeDeleted = await deleteModelById(
        customerSchema,
        id,
    );

    return res.json({
        message: "Customer deleted successfully",
    });
};