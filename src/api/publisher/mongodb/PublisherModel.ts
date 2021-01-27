import { model, Schema } from 'mongoose';

export const PublisherSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

PublisherSchema.statics.getForeignKeys = function () {
  return [];
};

export const PublisherModel = model('Publisher', PublisherSchema);
