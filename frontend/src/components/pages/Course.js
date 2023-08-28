import React from "react";
import Navbar from "../inc/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Course() {
  const [list, setList] = useState([]);
  const [year, setYear] = useState(1);
  const [sem, setSem] = useState(1);
  const [dept, setDept] = useState("CE");

  function getList() {
    axios.get("http://localhost:4000/app/getdepartments").then((Response) => {
      // console.log("response is");
      // console.log(typeof Response['data']);
      // console.log(Response);
      setList(Response["data"]);
    });
  }
  function mapcode(dept) {
    for (var i = 0; i < list.length; i++) {
      if (list[i]["Dept"] === dept) return list[i]["Code"];
    }
  }
  function handlechange(event) {
    if (event != undefined) {
      const val = event.target.value;
      const id = event.target.id;
      if (id === "yearval") {
        setYear(val);
      } else if (id === "semval") {
        setSem(val);
      } else if (id === "deptval") {
        setDept(mapcode(val));
      }
    }
  }
  function handleSubmit() {
    window.sessionStorage.setItem("year", year);
    window.sessionStorage.setItem("sem", sem);
    window.sessionStorage.setItem("dept", dept);

    window.location.replace("/department");
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <Navbar />

      <div className="container mt-5 w-50">
        <form action="/department">
          <div class="row ">
            <div class="col">
              <div class="card mt-5 p-3 border-dark">
                <div class="card-body ">
                  <div class="">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          class="input-group-text"
                          for="inputGroupSelect01"
                        >
                          Year
                        </label>
                      </div>
                      {/* <div className="h4">Year </div> */}
                      <select
                        className="form-control"
                        id="yearval"
                        onChange={handlechange}
                        placeholder="year"
                      >
                        <option selected>Choose...</option>
                        <option>
                          <a class="dropdown-item" href="#1" value="0" id="00">
                            1
                          </a>
                        </option>
                        <option>
                          <a class="dropdown-item" href="#2" value="1" id="01">
                            2
                          </a>
                        </option>
                        <option>
                          <a class="dropdown-item" href="#3" value="2" id="02">
                            3
                          </a>
                        </option>
                        <option>
                          <a class="dropdown-item" href="#4" value="3" id="03">
                            4
                          </a>
                        </option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          class="input-group-text"
                          for="inputGroupSelect01"
                        >
                          Sem
                        </label>
                      </div>
                      <select
                        class="form-control"
                        id="semval"
                        onChange={handlechange}
                      >
                        <option selected>Choose...</option>
                        <option>
                          <a class="dropdown-item" href="#s1">
                            1
                          </a>
                        </option>
                        <option>
                          <a class="dropdown-item" href="#s2">
                            2
                          </a>
                        </option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          class="input-group-text"
                          for="inputGroupSelect01"
                        >
                          Dept
                        </label>
                      </div>
                      <select
                        class="form-control"
                        id="deptval"
                        onChange={handlechange}
                      >
                        <option selected>Choose...</option>
                        {list.map((x, i) => (
                          <option>
                            <a class="dropdown-item" href="#{i}">
                              {x["Dept"]}
                            </a>
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    class="btn btn-primary submit mt-4"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Course;
