const jwt = reqiure('jsonwebtoken');
const bcrypt = reqiure('bcrypt');

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
    async signIn(email, plainPassword) {
        try {
            const user = await this.UserRepository.getByEmail(email);
            const passwordsMatch = this.checkPassword(plainPassword, encryptedPassword);
              if(!passwordMatch) {
                console.log("PAssword doesnt match");
                throw {error: 'Incorrect password'};
              }
              const newJWT = this.createToken({email: user.email, id:user.id});
              return newJWT;
        } catch (error) {
            console.log("something went wrong in the sign in process");
            throw error;
        }

    }

    

    createToken(user) {
        try {
            const result = json.sign(user,)
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }
    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;

        } catch (error) {
            console.log('Something went wrong in the token validation');
            throw error;
        }
    }
    checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
        return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
        console.log("Something went wrong in password comparison");
        throw error;
    }
}
}

module.exports = UserService;