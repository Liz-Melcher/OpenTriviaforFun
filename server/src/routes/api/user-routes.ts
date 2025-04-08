import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from '../../controllers/user-controller.ts';

const router = express.Router();

// GET /users - Get all users
router.get('/', getAllUsers);

// POST /users/login - Log in a user
router.post('/login', loginUser);


// GET /users/:id - Get a user by id
router.get('/:id', getUserById);

// POST /users - Create a new user
router.post('/', createUser);

// PUT /users/:id - Update a user by id
router.put('/:id', updateUser);

// DELETE /users/:id - Delete a user by id
router.delete('/:id', deleteUser);

export { router as userRouter };
