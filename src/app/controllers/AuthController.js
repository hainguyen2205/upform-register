import shopify from "../../configs/shopify.js";
import Session from "../models/Sessions.js";
import Users from "../models/Users.js";
import User from "../models/Users.js";
export default class AuthController {
    async auth(req, res) {
        if (!req.query.shop || !isValidShop(req.query.shop)) {
            return res.status(400).send('Invalid shop parameter.');
        }
        await Session.deleteOne({shop: req.query.shop});
        await shopify.auth.begin({
            shop: shopify.utils.sanitizeShop(req.query.shop, true),
            callbackPath: '/api/auth/callback',
            isOnline: false,
            rawRequest: req,
            rawResponse: res,
        });

    }

    async callback(req, res) {
        try {

            const callback = await shopify.auth.callback({
                rawRequest: req,
                rawResponse: res,
            });
            let shop = shopify.utils.sanitizeShop(req.query.shop, true);
            let session = callback.session;

            if (session) {
                const newSession = new Session(session);
                await newSession.save();
                console.log('Session saved:', newSession);
            }

            if (session && session.accessToken){
                let user = await Users.findOne({name: shop});
                if (!user){
                    user = new  User({
                        name: shop,
                        email: shop,
                        appInstalled: true
                    })
                    await user.save();
                }
            }
            const response = await shopify.webhooks.register({session: session});
            console.log('response', response);
            // if (!response[''])

            res.redirect('/');
        } catch (error) {
            console.error('Error in callback:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

function isValidShop(shop) {
    const shopRegex = /^[a-zA-Z0-9-]+\.myshopify\.com$/;
    return shopRegex.test(shop);
}