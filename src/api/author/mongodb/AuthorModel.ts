import { MongoDbUtils } from '@spetushkou/expressjs';
import { Document, model, Schema } from 'mongoose';

export const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true },
);

AuthorSchema.statics.getForeignKeys = function () {
  return ['books'];
};

AuthorSchema.post('find', async function (docs: Document[]) {
  for (const doc of docs) {
    await MongoDbUtils.expose(doc);
  }
});

AuthorSchema.post('findOne', async function (doc: Document) {
  await MongoDbUtils.expose(doc);
});

export const AuthorModel = model('Author', AuthorSchema);
