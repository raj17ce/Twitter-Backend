import { HealthRepository } from "../repositories/index.js";

class HealthService {
    constructor() {
        this.healthRepository = new HealthRepository();
    }
    
    async checkHealth() {
        const dbStatus = await this.healthRepository.checkDatabaseConnection();

        if (dbStatus === "connected") {
            return {
                status: 'UP',
                services: {
                    database: dbStatus,
                }
            };
        }
        else {
            throw new Error("Database Connection Error");
        }
    }
}

export default HealthService;