import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
    sessionId: {type: String, maxLength: 191},
    shop: {type: String},
    isOnline: {type: String},
    appInstalled: {type: Boolean},
    state: {type: String},
    scope: {type: String},
    accessToken: {type: String},
    expires_at: {type: Date},
    userId: {type: String},
    userFirstName: {type: String},
    userLastName: {type: String},
    userEmail: {type: String},
    userEmailVerified: {type: String},
    accountOwner: {type: String},
    locale: {type: String},
    collaborator: {type: Boolean},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;