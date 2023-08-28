const mongoose = require("mongoose");
const profTemplate = new mongoose.Schema({
   
  info: 
    {
      sno: {
        type: String,
        required: true,
      },
      COMP_CODE: {
        type: String,
        required: true,
      },
      CAT_CODE: {
        type: String,
        required: true,
      },
      SUBJECT_CODE: {
        type: String,
        required: true,
      },
      COURSE_NAME: {
        type: String,
        required: true,
      },
      TOTAL_UNITS: {
        type: String,
        required: true,
      },
      LECTURE_UNITS: {
        type: String,
        required: true,
      },
      PRACTICAL_UNITS: {
        type: String,
        required: true,
      },
      STATUS: {
        type: String,
        required: true,
      },
      PROGRAM_CODE: {
        type: String,
        required: true,
      },
      CDC_DEL: {
        type: String,
        required: true,
      },
      CDC_YEAR: {
        type: String,
        required: true,
      },
      EVEN_SEM: {
        type: String,
        required: true,
      },
      ODD_SEM: {
        type: String,
        required: true,
      },
      SUMMER_TERM: {
        type: String,
        required: true,
      }
    },
  
  lects : [],
  pracs : [],
  tuts : []
});

//sno	COMP_CODE	CAT_CODE	SUBJECT_CODE	COURSE_NAME	TOTAL_UNITS	LECTURE_UNITS	PRACTICAL_UNITS	STATUS	PROGRAM_CODE	CDC_DEL	CDC_YEAR	EVEN_SEM	ODD_SEM	SUMMER_TERM

module.exports = mongoose.model("profinfo", profTemplate);
