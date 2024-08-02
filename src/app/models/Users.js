import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
        name: {type: String, maxLength: 20},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        appInstalled: {type: Boolean, default: false},
        shopInfo: {type: String, default: ''},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}
    }, {
        versionKey: false
    });

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const User = mongoose.model('User', userSchema);

export default User;
