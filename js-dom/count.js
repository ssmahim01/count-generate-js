let count = document.getElementById('count-num');

document.getElementById('add').addEventListener('click', function(){
    currentNum1 = count.innerText;
        currentNum1++;
    count.innerText = currentNum1;
});

document.getElementById('decrease').addEventListener('click', function(){
        let currentNum2 = count.innerText;
        if(currentNum2 >= 1){
            currentNum2--;
        }
        count.innerText = currentNum2;
});