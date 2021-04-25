import mongoose from "mongoose";

export interface ShortenerInterface extends mongoose.Document {
  orginal_url: string;
  short_url: string;
  created_by?: string;
  created_on: Date;
  modified_on: Date;
  is_active: boolean;
}

export const ShortenerSchema = new mongoose.Schema({
  orginal_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: false, // user id should be placed here
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  modified_on: {
    type: Date,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
    required: true,
  },
});

export const ShortenerModel = mongoose.model<ShortenerInterface>(
  "Short",
  ShortenerSchema
);
