var btn = document.getElementById("btn");

btn.onclick = function() {
  var counter = document.getElementById("counter");
  var incrCounter = parseInt(counter.innerHTML);
  incrCounter++;
  
  counter.innerHTML = incrCounter;
}