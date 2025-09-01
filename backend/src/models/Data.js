import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: Number, required: true }
});

const DataSchema = new Schema({
  topic: { type: String, required: true },
  quiz_data: [QuestionSchema]
});

const Data = mongoose.model('Data', DataSchema);
export default Data;