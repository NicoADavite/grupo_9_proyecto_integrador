// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const usersController = require("../controllers/usersController");

// ************ Middlewares ************ 
const upload = require('../middlewares/userMulterMiddleware');
const registerValidations = require('../middlewares/registerValidationMiddleware');
const loginValidations = require('../middlewares/loginValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// ************ Route System ************

/*** REGISTER FORM ***/ 
// ruta para obtener la vista del formulario de registro
router.get("/register", guestMiddleware, usersController.register);
// ruta POST para para cargar los datos del registro
router.post("/register", upload.single("image"), registerValidations, usersController.registerProcess);

/*** LOGIN FORM  ***/ 
// ruta GET para obtener la vista del formulario de login
router.get("/login", guestMiddleware, usersController.login);
// ruta POST para para cargar los datos del login
router.post("/login", loginValidations, usersController.loginProcess);


/*** GET PROFILE ***/ 
// ruta para obtener la vista de perfil de usuario
router.get("/profile", authMiddleware, usersController.profile)

router.get('/logout', usersController.logout);

module.exports = router;