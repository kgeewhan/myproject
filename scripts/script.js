var img = document.getElementById("edwin");
var count = 0;

img.addEventListener('click', () => {
    count++;
    var counter = document.getElementById("counter");
    counter.innerHTML = "Count = " + count; 
});