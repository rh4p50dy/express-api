import { Router } from "express";
import { index , getPostById} from "../controllers/postController";
const router: Router = Router();

router.get("/posts",index)
router.get("/posts/:id",getPostById)

export { router as ContentRouter };