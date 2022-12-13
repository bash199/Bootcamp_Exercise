import {Schema} from "mongoose";
import validator from "validator";

export const productSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true,
      unique: false,
   },
   category: {
      type: String,
      required: true,
      trim: true,
   },
   isActive: Boolean,
   details: {
      description: {
         type: String,
         required: true,
         minLength: 10,
         trim: true,
      },
      price: {
         type: Number,
         required: true,
         validate(value) {
            if (value < 0) {
               throw new Error("must be a positive number");
            }
         },
      },
      discount: {
         type: Number,
         default: 0,
      },
      images: {
         type: [String],
         minLength: 2,
         validate(value) {
            if (!value.every((element) => validator.isURL(element))) {
               throw new Error("must be valid url links");
            }
         },
      },
      phoneNumber: {
         type: String,
         required: true,
         validate(value) {
            if (!validator.isMobilePhone(value, ["he-IL"])) {
               throw new Error("must be a valid israeli number");
            }
         },
      },
      dateAdded: {type: Date, default: Date.now},
   },
});
