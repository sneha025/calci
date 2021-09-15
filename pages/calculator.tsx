import React, { useState } from "react";
import styles from "../styles/calculator.module.css";
function calci() {
  const [calc, setcalc] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const ops: string[] = ["+", "-", "/", "*", "."];
  // if i got any operaton values mostly from the above list i will not show
  // then bun will be inactive

  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc == "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setcalc(calc + value);
    console.log(calc);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const delButton = (): void => {
    setcalc(calc.slice(0, -1));
    setResult(eval(calc).toString());
  };

  const digitButtons = (): any => {
    let digit: any[] = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digit;
  };

  const calculate = (): void => {
    setcalc(eval(calc).toString());
  };

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        {result ? <span>({result})</span> : ""}
        {calc || "0"}
      </div>
      <div className={styles.operators}>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={delButton}>DEL</button>
        <button
          onClick={() => {
            setcalc("");
            setResult("");
          }}
        >
          AC
        </button>
      </div>
      <div className={styles.digits}>{digitButtons()}</div>
      <div className={styles.digits}>
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default calci;
