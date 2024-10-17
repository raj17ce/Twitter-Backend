import mongoose from 'mongoose';

class HealthRepository {
    async checkDatabaseConnection() {
        return mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    }
}

export default HealthRepository;