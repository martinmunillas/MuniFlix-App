const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const model = mongoose.model('auth', accountSchema);
module.exports = model;
