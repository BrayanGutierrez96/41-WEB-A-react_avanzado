import {Router} from "express";
import { getUsers,loginUser,logoutUser,registerUser } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", getUsers);
router.post('/', registerUser);
router.post('/login', loginUser)
router.post('/logout', logoutUser)


export default router;