const mongoose = require("mongoose");

const itemVentaSchema = new mongoose.Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
});

const ItemVenta = mongoose.model("ItemVenta", itemVentaSchema);
module.exports = { ItemVenta };
