import { Router } from "express";
import { index , getUserById} from "../controllers/userController";
const router: Router = Router();

router.get("/",index)
router.get("/:id",getUserById)

export { router as userRouter };