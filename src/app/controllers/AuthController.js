export default class AuthController {
    auth(req, res) {
        const { shop } = req.query;
        console.log('Shop:', shop);
        res.render('index');
    }

    callback(req, res) {

    }
}