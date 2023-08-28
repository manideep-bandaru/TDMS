import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../inc/Navbar";

function Query() {
  const [sub, setSub] = useState([]);
  const [que, setQue] = useState([]);

  function handleChange(event) {
    if (event != undefined) {
      let { id, value } = event.target;
      if (id === "subject") {
        setSub(value);
      } else if (id === "query") {
        setQue(value);
      }
    }
  }

  function handleSubmit() {
    const obj = {
      subject: sub,
      query: que,
    };
    axios.post("http://localhost:4000/app/query", obj).then((res) => {
      console.log("query submited");
    });
    alert("query submited");
  }
  useEffect(() => {
    handleChange();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1" className="h2">
                  Do you have queries?
                </label>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1" className="h3">
                  Subject :
                </label>
                <textarea
                  class="form-control"
                  onInput={handleChange}
                  rows="1"
                  id="subject"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1" className="h3">
                  Query :{" "}
                </label>
                <textarea
                  class="form-control"
                  onInput={handleChange}
                  rows="3"
                  id="query"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Query;
