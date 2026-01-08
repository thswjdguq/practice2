const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

function login() {
    id = i.value;
    pw = p.value;
    if (id == LOGIN_ID && pw == LOGIN_PW) {
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin() {
    loginBox.innerHTML = `
        <div class="success_message">
            <div class="success_icon">✓</div>
            <h3 class="success_title">로그인 성공!</h3>
            <p class="success_text"><strong>${id}</strong>회원님 반갑습니다.</p>
            <button class="btn btn_primary" onclick="location.reload();">다시 로그인</button>
        </div>
    `;
}

window.onload = function () {
    i = document.getElementById("i");
    p = document.getElementById("p");
    loginBox = document.getElementById("login_box");
}