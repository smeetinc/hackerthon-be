import mongoose from "mongoose";

const calendarSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    event: {
      type: String,
      required: [true, "Event field is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    day: {
      type: String,
      required: [true, "Day is required"],
    },
    month: {
      type: String,
      required: [true, "Month is required"],
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Calender", calenderSchema);
