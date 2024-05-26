window.onload=() =>{
    function buildClock()
    {
        
    console.log("adbhutforew@gmail.com") ;

    const date = new Date();
    console.log(date);

    let hours = date.getHours() ;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds() ;
    
    hours = hours>=10 ? hours : "0"+hours ;
    minutes = minutes>=10 ? minutes : "0"+minutes ;
    seconds = seconds>=10 ? seconds : "0"+seconds ;
    

    document.querySelector('#clock-hours').innerText = hours ; //#id .class
    document.querySelector('#clock-minutes').innerText = minutes ;
    document.querySelector('#clock-seconds').innerText = seconds ;

    setTimeout(buildClock , 1000) ; //takes input in millisecond

    }
    buildClock();

} 