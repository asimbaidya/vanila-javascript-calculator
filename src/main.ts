import "./style.css";

const digits: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".digit");
const operators: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".operator");
const output: HTMLButtonElement | null = document.querySelector(".output");

console.log(output);
console.dir(output);

if (output !== null) {
  digits.forEach((btn) => {
    btn.addEventListener("click", (_event) => {
      const digitString = btn.innerText;
      const digit = parseInt(digitString);
      if (output.value === "") {
        output.value = digit.toString();
      } else {
        output.value = output.value + digit;
      }
    });
  });

  //
  operators.forEach((btn) => {
    btn.addEventListener("click", (_event) => {
      const operatorChar = btn.innerText;
      if (output.value === "") {
        console.log("Nothign to operate");
      } else if ("+-/*".includes(output.value[output.value.length - 1])) {
        console.log("Abe.. Chitya..>!! ** nehi hoti hain");
        alert("Shut the fucke up!");
      } else {
        output.value = output.value + operatorChar;
      }
    });
  });
}
