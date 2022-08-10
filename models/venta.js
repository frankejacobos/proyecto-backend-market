const { default: mongoose } = require("mongoose");

const esquema_de_venta = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ItemVenta",
      required: true,
    },
  ],
  fecha: {
    type: Date,
    default: Date.now,
  },
  importe: {
    type: Number,
    required: true,
  },
});

const Venta = mongoose.model("Venta", esquema_de_venta);
module.exports = { Venta };
