const mongoose = require("mongoose");

const SmoothiesSchema = new mongoose.Schema({
  method: {
    type: String,
    required: [true, "Please tell us how you'll recieve your smoothie!"],
    // drop-down options
    enum: ["Pick-up in Store", "Delivery"],
  },
  size: {
    type: String,
    required: [true, "Please select a size for your smoothie!"],
    enum: ["Small", "Medium", "Large", "SuperSip"],
  },
  quantity: {
    type: Number,
    required: [true, "Please select a quantity for your smoothie order!"],
    minlength: [1, "Quanitity must be at least 1 in order to purchase a smoothie!"],
  },

  liquid: {
    type: String,
    required: [true, "Please select a base liquid!"],
    enum: ["Fruit Juice", "Soy Milk", "Milk", "Oat Milk", "Yogurt", "Ice-Cream"],
  },

  fruits: {
    
    tropicalFruit: { type: Boolean, required: false, default: false},
    mixedBerry: { type: Boolean, required: false},
    mango: {type: Boolean, required: false, default: false},
    pomegranite: {type: Boolean, required: false, default: false},
    acaiBerry: {type: Boolean, required: false, default: false},
    blueberry: { type: Boolean, required: false, default: false },
    banana: { type: Boolean, required: false, default: false},
    raspberry: { type: Boolean, required: false, default: false},
    Pineapple: { type: Boolean, required: false, default: false},
    Orange: { type: Boolean, required: false, default: false},

  },

  veggies: {

    kale: { type: Boolean, required: false, default: false},
    swissChard: { type: Boolean, required: false, default: false},
    avocado: { type: Boolean, required: false, default: false},
    cucumber: { type: Boolean, required: false, default: false},
    spinach: { type: Boolean, required: false, default: false},
    mint: { type: Boolean, required: false, default: false},
    winterSquash: { type: Boolean, required: false, default: false},
    beets: { type: Boolean, required: false, default: false},
    celery: { type: Boolean, required: false, default: false},
  },
  
  extras: {
    type: String,
    enum: [
        "Protein Powder (chocolate)", 
        "Protein Powder (vanilla)",
        "Chia",
        "Aloe",
        "Cinnamon",
        "Cayenne",
        "Flax",
        "Goji Berry",
        "Hemp",
    ],
  },
},
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Smoothie", SmoothiesSchema);