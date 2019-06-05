import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema(
{
	title:
	{
		type: String,
		required: true,
	},
	text:
	{
		type: String,
	},
	date:
	{
		type: Date,
		default: Date.now
	},
	comments:
	[{
		author: { type: mongoose.Schema.Types.ObjectId, ref: 'Authors' },
		email: { type: mongoose.Schema.Types.ObjectId, ref: 'Authors' },
		comment: [{ type: String, }]
	}],
	tags:
	[{
		type : String,
	}],
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'Authors' },
});

const Posts = mongoose.model('Posts', postsSchema);

export default Posts;
