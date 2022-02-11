let a = "QWERTYUIOPASDFGHJKLZXCVBNM";
let b = "qwertyuiopasdfghjklzxcvbnm";
let c = "1234567890";
let d = "`-=_+[]{}()\|/.,<>";
let A;
let B;
let C;
let D;
let R;
let G;
let password = "";
let passwordPlace = document.getElementById("passwordPlace");
function createPassword(){
    while(password.length != G){
    R = Math.floor(Math.random() * (5 -1) + 1);
    console.log(R);
    switch(R){
        case 1:
            A = Math.floor(Math.random() * (23 - 1) + 1);
            A = a[A];
            password = password.concat(A);
            break;
        case 2:
            B = Math.floor(Math.random() * (23 - 1) + 1);
            B = b[B];
            password = password.concat(B);
            break;
        case 3:
            C = Math.floor(Math.random() * (10 - 1) + 1);
            C = c[C];
            password = password.concat(C);
            break;
        case 4:
            D = Math.floor(Math.random() * (18 -1) + 1);
            D = d[D];
            password = password.concat(D);
            break;
    }
    passwordPlace.innerHTML = password;
}}

//createPassword();
function buttonCreate(){
    passwordPlace.innerHTML = "<p>Creating Password</p>";
    G = document.getElementById("lenghtOfPasswords").value;
    createPassword();

}