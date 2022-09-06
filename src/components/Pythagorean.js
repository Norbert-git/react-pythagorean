import React from "react"
import ReactDOM from "react-dom"

let answer = 0
const calculate = () => {
  const a = parseFloat(document.getElementById("a").value)
  const b = parseFloat(document.getElementById("b").value)
  const c = parseFloat(document.getElementById("c").value)

  if (Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
    answer = Math.sqrt(c ** 2 - b ** 2).toFixed(2)
  }

  if (Number.isNaN(b) && !Number.isNaN(a) && !Number.isNaN(c)) {
    answer = Math.sqrt(c ** 2 - a ** 2).toFixed(2)
  }

  if (Number.isNaN(c) && !Number.isNaN(a) && !Number.isNaN(b)) {
    answer = Math.sqrt(a ** 2 + b ** 2).toFixed(2)
  }

  Pythagorean()
}

const app = document.getElementById("root")

const Pythagorean = () => {
  const template = (
    <div className="container">
      <form>
        <input
          className="field1"
          type="text"
          placeholder="Type in A"
          id="a"
        ></input>
        <br></br>
        <input
          className="fields"
          type="text"
          placeholder="Type in B"
          id="b"
        ></input>
        <br></br>
        <input
          className="fields"
          type="text"
          placeholder="Type in C"
          id="c"
        ></input>
        <br></br>
        <button className="button" type="button" onClick={calculate}>
          Calculate
        </button>
        <h2>The answer is :</h2>
        <h1 className="number">{answer}</h1>
      </form>
    </div>
  )

  ReactDOM.render(template, app)
}

export default Pythagorean
