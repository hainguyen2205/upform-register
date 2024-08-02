import User from "../models/Users.js";
class IndexController {
    index(req, res) {
        res.render('index');
    }
    async createUser(req, res) {
        try {
            const userData = {
                name: 'John Doe',
                email: 'john2.doe@example.com',
                password: 'securepassword',
                appInstalled: true,
                shopInfo: 'Sample shop info'
            };

            const newUser = new User(userData);

            const savedUser = await newUser.save();

            res.status(201).json(savedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}
export default IndexController