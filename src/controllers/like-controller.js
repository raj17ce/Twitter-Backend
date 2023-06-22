import { LikeService } from "../services/index.js";

let likeService;

class LikeController {

    constructor() {
        likeService = new LikeService();
    }

    async toggleLike(req, res) {
        try {
            const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.user.id);
            return res.status(201).json({
                success: true,
                message: "Successfully toggled a like",
                data: response,
                err: {}
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong while toggling a like",
                data: {},
                err: error
            });
        }
    }

}

export default LikeController;