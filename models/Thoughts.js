const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: string,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now,
        },
        username : {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
)


const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now,
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }   
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;
});

const Thoughts = model('Thoughts', thoughtSchema);
model.exports = Thoughts;