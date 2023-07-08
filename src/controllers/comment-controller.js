import { CommentService } from "../services/index.js";
import { errorObj, successObj } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

let commentService;

class CommentController {

    constructor() {
        commentService = new CommentService();
    }

    async createComment(req, res) {
        try {
            const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id, req.body.content);

            successObj.message = "Successfully created a comment";
            successObj.data = response;

            return res.status(StatusCodes.CREATED).json(successObj);
        }
        catch (error) {

            errorObj.message = "Something went wrong while creating a comment";
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }

    async deleteComment(req, res) {
        try {
            const response = await commentService.delete(req.params.id);

            successObj.message = "Comment deleted successfully";
            successObj.data = response;

            return res.status(StatusCodes.OK).json(successObj);
        }
        catch (error) {

            errorObj.message = "Something went wrong while deleting a comment";
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }
}

export default CommentController;