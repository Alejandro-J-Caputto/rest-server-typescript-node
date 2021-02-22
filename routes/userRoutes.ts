import {Router} from 'express';
import { deleteUser, getUser, getUsers, postUser, putUser } from '../controllers/userController';


const router = Router();

// router.route('/')
//   .get(getUsers)
//   .post(postUser)
// router.route('/:id')
//   .get(getUsers)
//   .delete(deleteUser)
//   .put(putUser)

router.get('/',       [],   getUsers)
router.post('/',      [],   postUser)
router.get('/:id',    [],   getUser)
router.put('/:id',    [],   putUser)
router.delete('/:id', [],   deleteUser)


export default router;

