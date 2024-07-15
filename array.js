let arrSubject = ["국어", "수학", "영어", "컴퓨터"];

const aveResult = testAvg(arrSubject);

document.write("평균점수는 " + aveResult + "입니다.");


function testAvg(arrData){
    let sum = 0;

    for(let i = 0; i < arrData.length; i++){
        sum += Number(prompt(arrData[i]+"점수를 입력하세요."));
    }
    
    const avg = sum/4;
    return avg;
}