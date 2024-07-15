const id = "admin";
const pass = "1234";

const userid = prompt("아이디를 입력하세요");
const userpass = prompt("비밀번호를 입력하세요");

function login(a, b){
    if(id == a && pass == b){
        alert("로그인 되었습니다.");
        document.write(a + "님 환영합니다.");
    }
    else{
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        location.reload();
    }
}

login(userid, userpass);