import React from "react"
import ReactDOM from "react-dom"

let answer = 0
const calculate = () => {
  const a = parseFloat(document.getElementById("a").value)
  const b = parseFloat(document.getElementById("b").value)
  const c = parseFloat(document.getElementById("c").value)

  if (Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
    answer = Math.sqrt(c ** 2 - b ** 2)
  }

  if (Number.isNaN(b) && !Number.isNaN(a) && !Number.isNaN(c)) {
    answer = Math.sqrt(c ** 2 - a ** 2)
  }

  if (Number.isNaN(c) && !Number.isNaN(a) && !Number.isNaN(b)) {
    answer = Math.sqrt(a ** 2 + b ** 2)
  }

  Pythagorean()
}

const app = document.getElementById("root")

const Pythagorean = () => {
  const template = (
    <div>
      <form>
        <input type="text" placeholder="type in A" id="a"></input>
        <input type="text" placeholder="type in B" id="b"></input>
        <input type="text" placeholder="type in C" id="c"></input>
        <button type="button" onClick={calculate}>
          Calculate
        </button>
        <h2>The answer is : {answer}</h2>
      </form>
    </div>
  )

  ReactDOM.render(template, app)
}

export default Pythagorean
