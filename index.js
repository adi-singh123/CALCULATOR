let text = '';
 let buttons = document.querySelectorAll('.button');
 Array.from(buttons).forEach((butt)=>{
  butt.addEventListener('click',function(){

    
    if(butt.innerHTML == '='){
      text = eval(text);
      document.querySelector('#display').value = text;
    }
    else if(butt.innerHTML == 'C'){
      text = '';
      document.querySelector('#display').value = text;
    }
    
    else{
      text = text + butt.innerHTML;
    document.querySelector('#display').value = text;
    }
  })
 })


