import React from "react";
import Navbar from "../inc/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

function CourseForm() {
  const [list, setList] = useState([]);
  const [dataf, setDataf] = useState([]);

  const headers = [
    {
      label: "L",
      key: "LECTURE_UNITS",
    },
    {
      label: "P",
      key: "PRACTICAL_UNITS",
    },
    {
      label: "U",
      key: "TOTAL_UNITS",
    },
  ];

  function getCart() {
    axios.get("http://localhost:4000/app/cartcourses").then((res) => {
      const temp = res["data"];
      //   console.log({ temp });
      setList(res["data"]["cart"]);
    });
  }
  function handleSubmit() {
    axios.get("http://localhost:4000/app/profsubmit").then((res) => {
      const temp = res["data"];
      console.log({ temp });

      setDataf(temp);

      // csvreport["data"] = dataf;
    });

    // csvreport["data"] = dataf;
  }
  function handleSelect(code) {
    console.log("handle select code" + code);
    window.sessionStorage.setItem("code", code);

    window.location.replace("/profinfo");
  }

  useEffect(() => {
    getCart();
    handleSubmit();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Code</th>
              <th scope="col">Course Name</th>
              <th scope="col">L</th>
              <th scope="col">P</th>
              <th scope="col">U</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>
                  {item.CAT_CODE}-{item.SUBJECT_CODE}
                </td>
                <td>{item.COURSE_NAME}</td>
                <td>{item.LECTURE_UNITS}</td>
                <td>{item.PRACTICAL_UNITS}</td>
                <td>{item.TOTAL_UNITS}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSelect(item.COMP_CODE)}
                  >
                    Add Info
                  </button>
                </td>
                <td>
                  <input type="checkbox" className="sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <a
          className="btn btn-success"
          onClick={handleSubmit}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(dataf)
          )}`}
          download="TTD.json"
        >
          {`Download Json`}
        </a>
        {/* <CSVLink {...dataf}>Download</CSVLink> */}
      </div>
    </div>
  );
}

export default CourseForm;
