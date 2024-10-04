let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);

let achieveCounter = 4;
setInterval(() => {
    document.getElementById('radio' + achieveCounter).checked = true;
    achieveCounter++;
    if(achieveCounter > 5){
        achieveCounter = 4;
    }
}, 5000);
