import { MongoDbUtils } from '@spetushkou/expressjs';
import { Document, model, Schema } from 'mongoose';

export const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' },
  },
  { timestamps: true },
);

BookSchema.statics.getForeignKeys = function () {
  return ['publisher'];
};

BookSchema.post('find', async function (docs: Document[]) {
  for (const doc of docs) {
    await MongoDbUtils.expose(doc);
  }
});

BookSchema.post('findOne', async function (doc: Document) {
  await MongoDbUtils.expose(doc);
});

export const BookModel = model('Book', BookSchema);
