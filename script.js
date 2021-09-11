let keys = document.querySelectorAll('.key');
const display = document.querySelectorAll('.displayScreen');
console.log(display)

//Add the event click to all keys and insert the values at display
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

let selectTheme = document.querySelector('#theme');
selectTheme.addEventListener("change",()=>{
    themeChange(selectTheme.value)
})

let themeObject = document.documentElement.style

function themeChange(theme){
        themeObject.setProperty('--main-background', themes[theme].mainbackground);
        themeObject.setProperty('--toggle-background', themes[theme].toogleBackground);
        themeObject.setProperty('--keypad-background', themes[theme].keypadBackground);
        themeObject.setProperty('--screen-background', themes[theme].screenBackground);
        themeObject.setProperty('--key-background', themes[theme].keyBackground);
        themeObject.setProperty('--key-shadow', themes[theme].keyShadow);
        themeObject.setProperty('--key-action-background', themes[theme].keyActionBackground);
        themeObject.setProperty('--key-shadow-action-background', themes[theme].keyActionShadow);
        themeObject.setProperty('--key-background-secondary', themes[theme].keyBackgroundSecondary);
        themeObject.setProperty('--key-background-secondary-shadow', themes[theme].keyBackgroundShadowSecondary);
        themeObject.setProperty('--text-primary-color', themes[theme].textPrimary);
        themeObject.setProperty('--text-secondary-color', themes[theme].textSecondary);
        themeObject.setProperty('--text-sub', themes[theme].textSub);
}
console.log(selectTheme.value);

 

//function insert elements on display
function insertDisplay(event){
    display += event.target.innerText;
    console.log(display);
    
}