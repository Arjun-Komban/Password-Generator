var copyBtn = document.getElementById("copy");
var inputText = document.getElementById("input");
var PassGeneratorBtn = document.getElementById("btn");
var result = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*&%^$#@!';
var charactersLength = characters.length;

PassGeneratorBtn.onclick = function(){
    result = '';
    for(let i = 0; i < 10; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    inputText.value = result;
}

copyBtn.onclick = function(){
    inputText.select();
    document.execCommand("copy");
}