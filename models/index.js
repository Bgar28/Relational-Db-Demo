const Post = require('./Post');
const Profile = require('./Profile');
const User = require('./User');

User.hasOne(Profile, {
    foreignKey: 'user_id'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreign_id: 'user_id',
})

module.exports = { User, Post, Profile };