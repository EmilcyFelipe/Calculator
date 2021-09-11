//Catches the element theme input
let selectTheme = document.querySelector('#theme');
//Catches the pseudo element root of css
var themeObject = document.documentElement.style;
//Selector of keys
let keys = document.querySelectorAll('.key');
//Selector of display
const display = document.querySelectorAll('.displayScreen');

//Get theme saved by user
function getThemeSaved(){
    console.log(localStorage.getItem('prefertheme'))
    if(localStorage.getItem('prefertheme')!=null){
        themeChange(localStorage.getItem('prefertheme'))
        selectTheme.value=localStorage.getItem('prefertheme');
    }
}
getThemeSaved();

//Listen the change event from the input range
//save the value at localStorage and call the function to change the theme
selectTheme.addEventListener("change",()=>{
    localStorage.setItem('prefertheme',selectTheme.value)
    themeChange(selectTheme.value)
})

//Establish the theme selected from the file themes.js
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

//Add the event listener click to all keys and insert the values at display
keys.forEach(key=>{
    key.addEventListener(('click'),()=>{
        if(key.id==='reset'){
            display[0].value='';
        }
        else if (key.id==='='){
            operation(); 
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
});

//Function that calculate the operation
function operation(){
    display[0].value = eval(display[0].value)

}



 
