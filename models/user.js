const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "username is requires"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    userType: {
      type: String,
      required: [true, "userType is required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F378%2F16%2Fpng-transparent-profile-profile-picture-human-face-head-man-woman-community-outline-schema-thumbnail.png&tbnid=uFBJnKtCqF7z0M&vet=10CJgBEDMopwFqFwoTCOjFnMiooIQDFQAAAAAdAAAAABAC..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dprofile%2Bpicture&docid=mxFxnEeyvf4RwM&w=360&h=360&q=profile%20images&ved=0CJgBEDMopwFqFwoTCOjFnMiooIQDFQAAAAAdAAAAABAC",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
