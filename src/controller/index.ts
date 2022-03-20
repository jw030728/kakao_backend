import express from "express";
import schoolController from "./school.controller";
import userController from "./user.controller";
import friendController from "./friend.controller";

const router = express.Router();

// /schools로 시작하는 애는 schoolController로 감
// router.use("/schools", schoolController);
router.use("/users", userController);
router.use("/friends", friendController);

export default router;
