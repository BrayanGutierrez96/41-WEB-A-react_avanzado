import {Router} from "express";
import {createUser, getUsers, deleteUser} from "../controllers/users.controllers.js";
const router = Router();

router.get("/", getUsers);
router.put("/",()=>{})
router.post("/", createUser)
router.delete("/:id",deleteUser)

export default router;