import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../inc/Navbar";

function Departments() {
  const [listCDC, setListCDC] = useState([]);
  const [list, setList] = useState([]);
  const [newlist, setNewlist] = useState([]);
  const [listnew, setListew] = useState([]);

  function getListCDC() {
    const obj = {
      year: window.sessionStorage.getItem("year"),
      sem: window.sessionStorage.getItem("sem"),
      dept: window.sessionStorage.getItem("dept"),
    };
    // console.log({ obj });
    axios.post("http://localhost:4000/app/getcoursescdc", obj).then((res) => {
      setListCDC(res["data"]);
    });
  }

  function getcourse() {
    // console.log({ obj });
    axios.get("http://localhost:4000/app/getcourse").then((res) => {
      setList(res["data"]);
    });
  }
  function handleChange(event) {
    event.preventDefault();
    if (event != undefined) {
      const val = event.target.value;
      var name = val;
      window.sessionStorage.setItem("name", name);
    }
  }

  function add() {
    var name = window.sessionStorage.getItem("name");
    for (var i = 0; i < list.length; i++) {
      if (list[i]["COURSE_NAME"] === name) {
        // setNewlist(list[i])
        newlist.push(list[i]);
        var temp = [...newlist];
        setNewlist(temp);
      }
    }

    // console.log({ newlist });
  }
  Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };
  function deleteHandler(id) {
    var temp;
    for (var i = 0; i < newlist.length; i++) {
      if (id === newlist[i]["COMP_CODE"]) {
        newlist.remove(i);
        temp = [...newlist];
        setNewlist(temp);
      }
    }
  }
  function handleSubmit(event) {
    var temp = [...listCDC, ...newlist];
    // temp = [...newlist]
    // console.log({temp});
    setListew(temp);

    axios.post("http://localhost:4000/app/cartcourses", temp).then((res) => {
      console.log("success");
    });
    
    window.location.replace("/courseform");

  }
  useEffect(() => {
    getListCDC();
    getcourse();
  }, []);
  return (
    <div className="">
      <Navbar />
      <table className=" container table table-striped w-75 mt-2 border-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Code</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody className="">
          {listCDC.map((x, i) => (
            <tr className="">
              <th className=" ">{i + 1}</th>
              <td className=" ">{x["SUBJECT_CODE"]}</td>
              <td className=" ">{x["COURSE_NAME"]}</td>
            </tr>
          ))}

          {newlist.map((x, i) => (
            <tr className="">
              <th className=" ">{listCDC.length + i + 1}</th>
              <td className=" ">{x["SUBJECT_CODE"]}</td>
              <td className=" ">{x["COURSE_NAME"]}</td>
              <td className=" ">
                <button
                  className="btn btn-primary"
                  onClick={() => deleteHandler(x["COMP_CODE"])}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>

      <form action="/courseform">
        <div className="container w-75">
          <div className="h3 mt-2">Select Courses</div>
          <div className="row">
            <div className="col">
              <select className="form-control" onChange={handleChange}>
                <option selected>Choose...</option>
                {list.map((x, i) => (
                  <option className="">
                    {x["COURSE_NAME"]}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <div className="btn btn-primary" onClick={() => add()}>
                +
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary submit mt-2"
            onClick={handleSubmit}
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Departments;
