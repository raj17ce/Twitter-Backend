import { LikeService } from "../services/index.js";
import { errorObj, successObj } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

let likeService;

class LikeController {

    constructor() {
        likeService = new LikeService();
    }

    async toggleLike(req, res) {
        try {
            const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.user.id);

            successObj.message = "Successfully toggled a like";
            successObj.data = response;

            return res.status(StatusCodes.OK).json(successObj);
        }
        catch (error) {

            errorObj.message = "Something went wrong while toggling a like";
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }

}

export default LikeController;