testFunc(); //함수 호이스팅

function testFunc(){
    document.write("안녕ㅎ?");
}




function testFunc2(){
    document.write("반가워?");
}

testFunc2();

// js는 무조건 함수를 먼저 읽고 변수를 읽기 때문에 함수 위에 선언을 해도 결과가 출력된다.


testFunc3();

let testFunc3 = function(){  //익명함수 , 함수 호이스팅이 되지 않는다.
    document.write("진짜야");
}

