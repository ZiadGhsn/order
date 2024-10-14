const orderSchema = require("../models/orderModel");
const { getAllModels, getModelById,createModel, deleteModelById, updateModelById } = require('../services/mongooseCrud'); // Adjust the path as needed

exports.createOrder= async(req,res,next) =>{
    const inputs = req.body;
    const orderToBeCreated= await createModel(
        orderSchema,
        inputs,
    );
    return res.status(200).json({
        message: "Order created successfully",
        data: orderToBeCreated,
    });
};
exports.getAllOrders = async(req,res,next) =>{
    const populatedKeys ="customer products"
    const orderToBeRetrieved = await getAllModels(
        orderSchema,
        populatedKeys,
    );
    if(!orderToBeRetrieved) {
        return res.status(404).json({
            message: "No orders found",
            success: false,
        });
    };
    return res.status(200).json({
        message: "Orders retrieved successfully",
        data: orderToBeRetrieved,
    });
};
exports.getOrderById = async(req,res,next) =>{
    const {id} = req.params;
    const poputedKeys ="customer products"
    const orderToBeRetrieved = await getModelById(
        orderSchema,
        id,
        poputedKeys,
    );
    if(!orderToBeRetrieved) {
        return res.status(404).json({
            message: "Order not found",
            success: false,
        });
    };
    return res.status(200).json({
        message:"order Retrived successfully",
        data: orderToBeRetrieved,
    });
};
exports.updateOrderById = async(req,res,next) =>{
    const {id} = req.params;
    const inputs = req.body;
    const orderToBeUpdated = await updateModelById(
        orderSchema,
        id,
        inputs,
    );
    if(!orderToBeUpdated) {
        return res.status(404).json({
            message: "Order not found",
            success: false,
        });
    };
    return res.status(200).json({
        message: "Order updated successfully",
        data: orderToBeUpdated,
    });
};

exports.deleteOrderById = async(req,res,next) =>{
    const {id} = req.params;
    const orderToBeDeleted = await deleteModelById(
        orderSchema,
        id,
    );
    return res.json("order Deleted successfully");
};