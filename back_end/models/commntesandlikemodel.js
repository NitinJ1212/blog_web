const mongoose = require('mongoose');

const commentSchema = new Schema({
 commint:{
type:String ,
required: true
  },
  comantbyusertoblog: { type: Schema.Types.ObjectId, ref: 'Blog' },
    comantbyuser: { type: Schema.Types.ObjectId, ref: 'User' } // Reference to the User model
  });
  const Comment = mongoose.model('Comment', commentSchema);

  module.exports = { Comment };