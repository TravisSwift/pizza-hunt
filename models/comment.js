const { schema, model } = require('mongoose');

const CommentSchema = new schema({
writtenBy: {
    type: String
},
commentBody: {
    type: String
},
createdAt: {
    type: Date,
    default: Date.now
}
});

const Pizza = require('./Pizza');
const Comment = require('./Comment');

module.exports = { Pizza, Comment };