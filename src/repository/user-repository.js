const { user } = require('../model/index');

class UserRepository {
    async create(data) {
        try {
            const user = await UserRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }

    async destroy(userId) {
        try {
            await UserRepository.destroy({
                where: {
                id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;

        }
    }


}