let keys = document.querySelectorAll('.key');
const display = document.querySelectorAll('.displayScreen');
console.log(display)

//Add the event click to all keys and call the function that will insert the value at the display
keys.forEach(key=>{
    key.addEventListener(('click'),()=>{
        if(key.id==='reset'){
            display[0].value='';
        }
        else if (key.id==='='){
            console.log('igual')
        }
        else if( key.id==="del"){
            let dArray = display[0].value.split('');
            dArray.pop()
            display[0].value=dArray.join('');
        }
        else{
            display[0].value+=key.id;
        }
    })
})
 

//function insert elements on display
function insertDisplay(event){
    display += event.target.innerText;
    console.log(display);
    
}