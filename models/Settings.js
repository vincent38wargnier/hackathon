const mongoose = require('mongoose');

const productSubscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  recurring: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  }
});

const settingsSchema = new mongoose.Schema({
  topics: [{
    type: String
  }],
  productSubscriptions: [productSubscriptionSchema]
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;