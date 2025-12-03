var height = document.querySelector("#num").clientHeight;
var scrollTop = window.pageYOffset;
var boolean = true;

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset;
    if(scrollTop >= height && boolean == true)
    {
        boolean = false;
        valueDisplays.forEach(valueDisplays => {
            let startValue = 0;
            let endValue = parseInt(valueDisplays.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function(){
                startValue += 1;
                valueDisplays.textContent = startValue;
                if(startValue == endValue)
                {
                    clearInterval(counter);
                    valueDisplays.textContent = startValue + "+";
                }
            }, duration);
        });
    }
});