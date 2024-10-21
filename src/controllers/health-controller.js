import { HealthService } from "../services/index.js"
import { errorObj, successObj } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

let healthService;

class HealthController {

    constructor() {
        healthService = new HealthService();
    }

    async checkHealth(req, res) {
        try {
            const response = await healthService.checkHealth();

            successObj.message = "Server and Database is Up and Running.";
            successObj.data = response;

            return res.status(StatusCodes.OK).json(successObj);
        }
        catch (error) {

            errorObj.message = error.message;
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }

}

export default HealthController;