import { Router } from "express";
import { index , getPostById , deletePostById } from "../controllers/postController";
import { deleteCommentById } from "../controllers/commentController";
const router: Router = Router();

router.get("/posts",index)
router.get("/posts/:id",getPostById)
router.delete("/posts/:id",deletePostById)
router.delete("/comments/:id",deleteCommentById)

export { router as ContentRouter };