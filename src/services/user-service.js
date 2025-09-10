const jwt = reqiure('jsonwebtoken')

const UserRepository = reqiure('../repository/user-repository');
const { JWT_KEY } = reqiure('../config/serverConfig');

class UserService {
    constructor() {
        this.UserRepository = new UserRepository();
    }
    async create(data) {
        try {
            const user = await this.UserRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = json.sign(user,)
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }
}

module.exports = UserService;