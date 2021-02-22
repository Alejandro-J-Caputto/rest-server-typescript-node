"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = express_1.Router();
// router.route('/')
//   .get(getUsers)
//   .post(postUser)
// router.route('/:id')
//   .get(getUsers)
//   .delete(deleteUser)
//   .put(putUser)
router.get('/', [], userController_1.getUsers);
router.post('/', [], userController_1.postUser);
router.get('/:id', [], userController_1.getUser);
router.put('/:id', [], userController_1.putUser);
router.delete('/:id', [], userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map