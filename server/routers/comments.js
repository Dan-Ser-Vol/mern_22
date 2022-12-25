import {Router} from  "express"
import {checkAuth} from "../utils/checkAuth.js"
import {createComment, getComment, removeComment, updateComment, getAllComments} from "../controllers/comments.js";


const router = new Router()
router.get("/", checkAuth, getComment)
router.get("/:id", checkAuth, getAllComments)
router.post("/:id", checkAuth, createComment)
router.put("/:id", checkAuth, updateComment)
router.delete("/:id", checkAuth, removeComment)
export default router;
