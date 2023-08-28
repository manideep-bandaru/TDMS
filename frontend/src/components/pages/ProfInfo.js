import React from "react";
import Navbar from "../inc/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function ProfInfo() {
  const [course, setCourse] = useState([]);
  const [lect, setLect] = useState([]);
  const [lectRen, setLectren] = useState([]);
  const [tut, setTut] = useState([]);
  const [tutRen, setTutren] = useState([]);
  const [prac, setPrac] = useState([]);
  const [pracRen, setPracren] = useState([]);

  function getCourse() {
    const code = window.sessionStorage.getItem("code");
    console.log("code is");
    // console.log({ code })
    axios
      .post("http://localhost:4000/app/profinfo", { code: code })
      .then((data) => {
        setCourse(data["data"]);
        // console.log({ course })
      });
  }
  function handleChange(event) {
    if (event === undefined) return;
    const { id, value } = event.target;
    if (id === "lectid1" || id === "lectid2") {
      setLect(value);
    } else if (id === "tutid1" || id === "tutid2") {
      setTut(value);
    } else if (id === "pracid1" || id === "pracid2") {
      setPrac(value);
    }
  }
  function handleAddl(event) {
    event.preventDefault();

    var temp1 = [...lectRen];
    temp1.push(lect);
    setLectren(temp1);
    document.getElementById("lectid1").value = "";
  }
  function handleAddt(event) {
    event.preventDefault();
    var temp2 = [...tutRen];
    temp2.push(tut);
    setTutren(temp2);
    // console.log({tutRen});
    document.getElementById("tutid1").value = "";
  }
  function handleAddp(event) {
    event.preventDefault();
    var temp3 = [...pracRen];
    temp3.push(prac);
    setPracren(temp3);
    document.getElementById("pracid1").value = "";
  }
  Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };
  function handleDel(event, id) {
    if (event === undefined) return;
    event.preventDefault();
    // var temp = [...lectRen];
    const uniqid = event.target.id;
    if (uniqid === "lecdel") {
      const temp = [...lectRen];
      for (var i = 0; i < temp.length; i++) {
        if (id === i) {
          // console.log(i);
          lectRen.remove(i);
          // if(i === temp.length-1) lectRen.remove(i)
          // console.log({ lectRen });
          const temp1 = [...lectRen];
          setLectren(temp1);
          return;
          // temp1.push(lectRen[i]);
        }
      }
    } else if (uniqid === "tutdel") {
      for (var i = 0; i < tutRen.length; i++) {
        if (id === i) {
          // console.log(i);
          tutRen.remove(i);
          // console.log({ lectRen });
          const temp1 = [...tutRen];
          setTutren(temp1);
          return;
          // temp1.push(lectRen[i]);
        }
      }
    } else if (uniqid === "pracdel") {
      for (var i = 0; i < pracRen.length; i++) {
        if (id === i) {
          // console.log(i);
          pracRen.remove(i);
          // console.log({ lectRen });
          const temp1 = [...pracRen];
          setPracren(temp1);
          return;
          // temp1.push(lectRen[i]);
        }
      }
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      info: course,
      lects: lectRen,
      tuts: tutRen,
      pracs: pracRen,
    };

    axios.post("http://localhost:4000/app/profsubmit", obj).then((data) => {});
    window.location.replace('/courseform')
  }
  useEffect(() => {
    getCourse();
    handleDel();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="h2 mt-4">
          {course["CAT_CODE"] +
            "-" +
            course["SUBJECT_CODE"] +
            "    " +
            course["COURSE_NAME"]}
        </div>

        <h2>Lecture</h2>
        <form>
          <div class="form-group row mb-2 ">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Proffessor Name :
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control"
                id="lectid1"
                placeholder='lecturer(s) (seperate by "," )'
                onChange={handleChange}
              />{" "}
            </div>
            <div className="col-sm-1">
              <button className="btn btn-primary" onClick={handleAddl}>
                ✔️
              </button>
            </div>
          </div>

        
          {lectRen.map((x, i) => (
            <div class="form-group row mb-2">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                L{i + 1}
              </label>

              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="lectid2"
                  placeholder='lecturer(s) (seperate by "," )'
                  onChange={handleChange}
                  value={x}
                />{" "}
              </div>
              <div className="col-sm-1">
                <button className="btn btn-primary" onClick={handleAddl}>
                  ✔️
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="btn btn-primary"
                  id="lecdel"
                  onClick={(event) => handleDel(event, i)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </form>

        <hr></hr>
        <h2>Tutorial</h2>
        <form>
          <div class="form-group row mb-2 ">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Proffessor Name :
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control"
                id="tutid1"
                placeholder='lecturer(s) (seperate by "," )'
                onChange={handleChange}
              />{" "}
            </div>
            <div className="col-sm-1">
              <button className="btn btn-primary" onClick={handleAddt}>
                ✔️
              </button>
            </div>
          </div>
          {tutRen.map((x, i) => (
            <div class="form-group row mb-2">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                T{i + 1}
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="tutid2"
                  placeholder='lecturer(s) (seperate by "," )'
                  onChange={handleChange}
                  value={x}
                />{" "}
              </div>
              <div className="col-sm-1">
                <button className="btn btn-primary" onClick={handleAddt}>
                  ✔️
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="btn btn-primary"
                  id="tutdel"
                  onClick={(event) => handleDel(event, i)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </form>

        <hr></hr>
        <h2>Practical</h2>
        <form>
          <div class="form-group row mb-2 ">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Proffessor Name :
            </label>
            <div class="col-sm-5">
              <input
                type="text"
                class="form-control"
                id="pracid1"
                placeholder='lecturer(s) (seperate by "," )'
                onChange={handleChange}
              />{" "}
            </div>
            <div className="col-sm-1">
              <button className="btn btn-primary" onClick={handleAddp}>
                ✔️
              </button>
            </div>
          </div>
          {pracRen.map((x, i) => (
            <div class="form-group row mb-2">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                P{i + 1}
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  class="form-control"
                  id="pracid2"
                  placeholder='lecturer(s) (seperate by "," )'
                  onChange={handleChange}
                  value={x}
                />{" "}
              </div>
              <div className="col-sm-1">
                <button className="btn btn-primary" onClick={handleAddp}>
                  ✔️
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="btn btn-primary"
                  id="pracdel"
                  onClick={(event) => handleDel(event, i)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <button
            className="btn btn-primary submit"
            onClick={handleSubmit}
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfInfo;
