function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    var display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
  }
  
  function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function calculate() {
    var display = document.getElementById("display").value;
    var answer = eval(display);
    document.getElementById("display").value = answer;
  }
  