const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.get("/", usersController.findUsers);

router.get("/:id", usersController.findUser);

router.post("/", usersController.addUser);

router.put("/update/:id", usersController.updateUser);

router.delete("/delete/:id", usersController.deleteUser);

module.exports = router