const { Router } = require("express");

const express = require("express");
const router = express.Router();

const fs = require("fs");
const { parse } = require("csv-parse");

const cartTemplatecopy = require("../models/cartCourses");
const queryTemplatecopy = require("../models/query");
const profTemplatecopy = require("../models/profInfo");

router.get("/getdepartments", (req, res) => {
  const data = [];

  fs.createReadStream("./departments.csv")
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
      })
    )
    .on("data", function (row) {
      // 👇 push the object row into the array
      //   console.log({row});
      data.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      // 👇 log the result array
      // console.log("parsed csv data:");
      // console.log(data);
      res.send(data);
    });
});

router.post("/getcoursescdc", (req, res) => {
  const data = [];
  const year = req.body.year;
  const dept = req.body.dept;
  const sem = req.body.sem;

  fs.createReadStream("./course.csv")
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
      })
    )
    .on("data", function (row) {
      // 👇 push the object row into the array
      // console.log({row});
      var semid = "2";
      if (row["EVEN_SEM"] === "FALSE") {
        semid = "1";
      }
      if (
        row["CAT_CODE"] === dept &&
        row["CDC_YEAR"] === year &&
        semid === sem &&
        row["CDC_DEL"] == "CDC"
      ) {
        // console.log({ row });
        data.push(row);
      }
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      // 👇 log the result array
      // console.log("parsed csv data:");
      // console.log(data);
      res.send(data);
    });
});

router.get("/getcourse", (req, res) => {
  const data = [];

  fs.createReadStream("./course.csv")
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
      })
    )
    .on("data", function (row) {
      // 👇 push the object row into the array
      // console.log({row});

      // console.log({ row });
      data.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      // 👇 log the result array
      // console.log("parsed csv data:");
      // console.log(data);
      var data1 = data.sort((p1, p2) =>
        p1.COURSE_NAME > p2.COURSE_NAME
          ? 1
          : p1.COURSE_NAME < p2.COURSE_NAME
          ? -1
          : 0
      );
      res.send(data1);
    });
});

// save cart courses to mongodb
router.post("/cartcourses", (req, res) => {
  const list = req.body;
  const id = "1";
  // let {
  //   sno,
  //   COMP_CODE,
  //   CAT_CODE,
  //   SUBJECT_CODE,
  //   COURSE_NAME,
  //   TOTAL_UNITS,
  //   LECTURE_UNITS,
  //   PRACTICAL_UNITS,
  //   STATUS,
  //   PROGRAM_CODE,
  //   CDC_DEL,
  //   CDC_YEAR,
  //   EVEN_SEM,
  //   ODD_SEM,
  //   SUMMER_TERM,
  // } = list;

  const cart = new cartTemplatecopy({
    id: id,
    cart: list,
  });
  // cartTemplatecopy
  //   .find()
  //   .limit(1)
  //   .sort({ $natural: -1 })
  //   .exec((err, user) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       // console.log({ user });
  //       const temp = user[0]["cart"];
  //       // console.log({temp});
  //       //   const cart = new cartTemplatecopy.updateOne(
  //       //     {
  //       //       id: id,
  //       //     },
  //       //     {
  //       //       $set: {
  //       //         cart: list,
  //       //       },
  //       //     }
  //       //   );
  //     }
  //   });
  cart
    .save()
    .then((data) => {
      console.log("cart saved");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/cartcourses", (req, res) => {
  cartTemplatecopy
    .findOne({})
    .sort({ _id: -1 })
    .exec((err, user) => {
      if (err) {
        console.log(err);
      } else {
        // console.log({ user });
        res.send(user);
      }
    });
});

router.post("/query", (req, res) => {
  let { subject, query } = req.body;

  const queryobj = new queryTemplatecopy({
    subject: subject,
    query: query,
  });
  queryobj
    .save()
    .then((data) => {
      console.log("query saved");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/profinfo", (req, res) => {
  const code = req.body.code;
  // console.log(code);
  cartTemplatecopy
    .findOne({})
    .sort({ _id: -1 })
    .exec((err, user) => {
      if (err) {
        console.log(err);
      } else {
        const course = user["cart"];
        for (var i = 0; i < course.length; i++) {
          if (code === course[i]["COMP_CODE"]) {
            const temp = course[i];
            // console.log({temp});
            res.send(course[i]);
          }
        }
      }
    });
});

router.post("/profsubmit", (req, res) => {
  let { info, lects, tuts, pracs } = req.body;
  const profs = new profTemplatecopy({
    info: info,
    lects: lects,
    tuts: tuts,
    pracs: pracs,
  });
  profs
    .save()
    .then((data) => {
      console.log("profs saved");
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get('/profsubmit' , (req,res) => {
  profTemplatecopy.find({})
  .exec((err , user) => {
    if(err){
      console.log(err);
    }else{
      console.log("prof submit get");
      // console.log({user});
      res.send(user)
    }
  })
})

module.exports = router;
