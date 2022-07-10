let scn = document.querySelector(".input");
let buttons = document.querySelectorAll(".btn");

for (i of buttons) {
  i.addEventListener("click", (e) => {
    let btn = e.target.innerText;
    if (btn == 'AC') {
      scn.value = "";
    }
    else if (btn == "CE") {
      scn.value = scn.value.substr(0, scn.value.length - 1);
    }
    else if (btn == "sin") {
      scn.value = Math.sin(scn.value);
    }
    else if (btn == "cos") {
      scn.value = Math.cos(scn.value);
    }
    else if (btn == "tan") {
      scn.value = Math.tan(scn.value);
    }
    else if (btn == "=") {
      scn.value = eval(scn.value);
    }
    else if (btn == "e") {
      if (scn.value == "") scn.value = 2.718281828459045;
      else scn.value = Math.pow(2.718281828459045, scn.value);
    }
    else if (btn == "π") {
      scn.value = 3.141592653589793238;
    }
    else if (btn == "log") {
      scn.value = Math.log(scn.value);
    }
    else if (btn == "√") {
      scn.value = Math.sqrt(scn.value);
    }
    else if (btn == "X!") {
      var num = scn.value;
      var fact = 1;
      for (var i = 2; i <= num; i++) {
        fact = fact * i;
      }
      scn.value = fact;
    }
    else if (btn == "x^y") {
      var num1 = scn.value.substr(0,1);
      var num2 = scn.value.substr(1,2);
      var ans = 1;
      for (var i = 0; i < num2; i++) {
        ans = ans * num1 ;
      }
      scn.value = ans;
    }
    else {
      scn.value += btn;
    }
  });
}
