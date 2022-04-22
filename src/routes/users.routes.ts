import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '../modules/accounts/useCases/createUser/CreateUserController';
import UpdateUserAvatarController from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const userRoutes = Router();

const uploader = multer({
  dest: './temp',
});

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post('/', createUserController.handle);

userRoutes.patch('/avatar', uploader.single('file'), updateUserAvatarController.handle);

export { userRoutes };
