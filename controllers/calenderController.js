import User from "../models/userModel.js";
import Calender from "../models/calenderModel";
import catchAsyn from "../utils/catchAsync";

//@desc Get calender data
//@route GET api/v1/calender
//@access Private

const getCalenderData = catchAsyn(async (req, res) => {
  try {
    const calenders = await Calender.find({ user: req.user.id });

    res.status(200).json(calenders);
  } catch (err) {
    return next(err);
  }
});

//@desc  Add new event to the calendar
//@route POST api/v1/calender/
//@access Private

const newCalender = catchAsyn(async (req, res) => {
  const { user, event, time, day, month, year } = req.body;
  if (!user || !event || !time || !day || !month || !year) {
    return res.status(400).json({ msg: "Please provide all fields" });
  }

  const calender = await Calender.create({
    user: req.user.id,
    event: req.body.event,
    time: req.body.time,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
  });
  res.status(200).json(calender);
});

//checking if user is authorized
/*
if (calender.user.toString() !== req.user.id) {
    return res.status(401).json({msg: "User not authorized"});
}
*/

export { getCalenderData, newCalender };
