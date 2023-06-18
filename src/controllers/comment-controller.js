import { CommentService } from "../services/index.js";

let commentService;

class CommentController {

    constructor() {
        commentService = new CommentService();
    }

    async createComment(req, res) {
        try {
            const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
            return res.status(201).json({
                success: true,
                message: "Successfully created a comment",
                data: response,
                err: {}
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong while creating a comment",
                data: {},
                err: error
            });
        }
    }
}

export default CommentController;