const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body("firstName").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("lastName").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email")
        .notEmpty().withMessage("Tienes que escribir un email").bail()
        .isEmail().withMessage("Debes ingrear un formato de correo valido"),
	body("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({ min : 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("image").custom((value, { req }) => {

		let file = req.file;
        
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]