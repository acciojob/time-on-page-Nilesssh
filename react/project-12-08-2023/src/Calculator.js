import React, { useState } from "react";
export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sign, setSign] = useState("");
  const [msg, setMsg] = useState("");
  const [Type, setType] = useState("");
  function calculation() {
        if(number1===""){
            setType("Error!");
            setMsg(`Num 1 Cannot Be Empty`)
        }else if(number2===""){
            setType("Error!");
            setMsg(`Num 2 Cannot Be Empty`)
        }else{
            setType("Success!");
            let ans = "";
            console.log(sign);
            if(sign=="+"){
                ans = (number1 + number2);
            }else if(sign==="-"){
                ans = (number1 - number2);
            }else if(sign==="*"){
                ans = (number1 * number2);
            }else{
                ans = (number1 / number2);
            }
            setMsg(`Result-${ans}`);
        }
  }
  return (
    <div className="calc">
      <div className="calcfield">
        <p className="heading">
          <b>React Calculator</b>
        </p>
        <div className="num1">
          <input
            onChange={(event) => {
              setNumber1(event.target.value);
            }}
            type="Text"
            placeholder="Num 1"
          />
        </div>
        <div className="num2">
          <input
            onChange={(event) => {
              setNumber2(event.target.value);
            }}
            type="Text"
            placeholder="Num 2"
          />
        </div>
        <div className="btnscalc">
          <button className="btncal btn1" value={"+"} onClick={(event) => {
              setSign(event.target.value);
              setTimeout(() => {
                calculation();
              }, 200);
            }}>
            <b>+</b>
          </button>
          <button className="btncal btn2" value={"-"} onClick={(event) => {
              setSign(event.target.value);
              setTimeout(() => {
                calculation();
              }, 200);
            }}>
            <b>-</b>
          </button>
          <button className="btncal btn3" value={"*"} onClick={(event) => {
              setSign(event.target.value);
              setTimeout(() => {
                calculation();
              }, 200);
            }}>
            <b>x</b>
          </button>
          <button className="btncal btn4" value={"/"} onClick={(event) => {
              setSign(event.target.value);
              setTimeout(() => {
                calculation();
              }, 200);
            }}>
            <b>/</b>
          </button>
        </div>
        <div className="errororsucess">
            <p className={Type==="Error!"?"error":"success"}>{Type}</p>
            <p className="msg">{msg}</p>
        </div>
      </div>
    </div>
  );
}


