const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이거 적어서 로딩되자마자 바로 시간 보임, 안적으면 1초정도 딜레이됨
setInterval(getClock, 1000);
//interval 일정 시간마다 실행/ 파라미터 (실행할 함수, 시간(ms))

// "1".padStart(2, "0");
//1이라는 문자의 길이가 2가 되야하는데, 2가 안되면
//앞자리에 "0"으로 싲가하게 해라 

// setTimeout(sayHello, 5000);

