import { Router } from "express";
import { index , getUserById, addUser} from "../controllers/userController";
const router: Router = Router();

// get users
router.get("/",index)

// get specific user
router.get("/:id",getUserById)

// add a user
router.post("/",addUser)

export { router as userRouter };