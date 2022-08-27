
function myFunction() {
    let pwd = document.getElementById("password").value;
    let err = document.getElementById("error");
    let regexPwd = /^(?=.*)(?=.*[A-Z]).{8,}$/
    let ch = pwd.charAt(0);

    if (pwd == null || pwd == "") {
        console.log(pwd);
        err.innerHTML = "Bạn nhập sai!";
    } else if (!regexPwd.test(pwd)) {
        console.log(pwd);
        err.innerHTML = "Bạn nhập sai!";
    } else if ( ch >= '0' && ch <= '9') {
        console.log(ch);
        console.log(pwd);
        err.innerHTML = "Bạn nhập sai!";
    } else {
        console.log(pwd);
        err.innerHTML = "Bạn nhập đúng.";
    }
}