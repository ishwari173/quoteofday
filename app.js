const form = document.querySelector('form');

form.addEventListener('submit', function SubmitOnclick(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    let result = document.querySelector('span');

    let ans;
    if((input.value <=0) || (isNaN(input.value))){
        
        result.innerHTML = "<p>Please Enter a value number</p>"
        setTimeout(() => {
            result.innerHTML = '';
        }, 2000);

        input.value = '';
    }
    else{
        ans = Number(input.value) * 2.2;
       
        result.innerHTML = `${ans.toFixed(2)}`;
        setTimeout(() => {
            result.innerHTML = '';
            input.value = '';
           
        }, 10000);
    }
})