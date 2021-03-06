// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const apiProductsController = require("../../controllers/api/apiProductsController");

// ************ Route System ************

/*** GET ALL PRODUCTS ***/ 
// ruta para obtener la vista de la lista de productos
router.get("/", apiProductsController.list);

/*** GET LAST PRODUCT IN DB ***/ 
// ruta para obtener la vista del ultimo producto en la base de datos
router.get("/lastproduct", apiProductsController.lastProduct);

/*** GET ONE PRODUCT ***/ 
// ruta para obtener la vista del detalle de un producto en particular
router.get("/:id", apiProductsController.detail);

module.exports = router;