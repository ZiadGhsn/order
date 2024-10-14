exports.createModel = async(model,inputs) =>{
    let modelToBeCreated = new model(inputs);
    await modelToBeCreated.save();
    return modelToBeCreated;
};
exports.getAllModels = async(model,populatedKeys = undefined,selectedKeys=undefined) =>{
    let modelToBeRetrieved = await model.find().populate(populatedKeys ?? undefined).select(selectedKeys ?? undefined);
    return modelToBeRetrieved;
};
exports.getModelById = async (model,id,populatedKeys = undefined,selectedKeys = undefined) => {
    let modelToBeRetrieved = await model.findById(id).populate(populatedKeys?? undefined).select(selectedKeys?? undefined);
    return modelToBeRetrieved;
};
exports.updateModelById = async (model, id, inputs) => {
    let modelToBeUpdated = await model.findByIdAndUpdate(id, {...inputs}, {new: true});
    return modelToBeUpdated;
};
exports.deleteModelById = async (model, id) => {
    await model.findByIdAndDelete(id);
    return `Deleted model with id: ${id}`;
};