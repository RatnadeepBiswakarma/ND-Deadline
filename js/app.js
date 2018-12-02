let deadLine = new Date('December 14, 2018 23:59:59');


function myTime() {
    let timer = setInterval(() => {

        let currentTime = new Date();
        let remainedTotalSeconds = (deadLine - currentTime); // returns total remained milliseconds
        let remSec = Math.floor((remainedTotalSeconds % (60 * 1000)) / 1000);
        let remMin = Math.floor((remainedTotalSeconds % (60 * 60 * 1000)) / (1000 * 60));
        let remHour = Math.floor((remainedTotalSeconds % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
        let remDays = Math.floor(remainedTotalSeconds / (1000 * 60 * 60 * 24));
        // let remDays = Math.floor(remainedTotalSeconds % (60 * 60 * 24 * 30 * 1000) / (1000 * 60 * 60 * 24));
        // let months = Math.floor(remainedTotalSeconds / (60 * 60 * 24 * 30 * 1000));
        document.getElementById('seconds').innerHTML = ('0' + remSec).slice(-2);
        document.getElementById('minutes').innerHTML = ('0' + remMin).slice(-2);
        document.getElementById('hours').innerHTML = ('0' + remHour).slice(-2);
        if(remDays.length < 3) {
            document.getElementById('days').innerHTML = ('0' + remDays).slice(-2);
        } else {
            document.getElementById('days').innerHTML = remDays;
        }
        // document.getElementById('days').innerHTML = remDays;
        // document.getElementById('months').innerHTML = ('0' + months).slice(-2);
        if (remainedTotalSeconds < 1000) {
            clearInterval(timer);
            document.getElementById('seconds').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('days').innerHTML = '00';
            // document.getElementById('months').innerHTML = '00';
            document.getElementById('message').innerHTML = 'You crossed your Deadline !!!';
        }
    }, 1000);

}
myTime();





// code logics
// let think total remained time = TT (which will be returned in milliseconds)
// seconds = ((milliseconds % (60 * 1000)) / 1000);
// minutes = ((milliseconds % (60 * 60 * 1000)) / 1000);




// let remainingDays = deadLine.getDay();
// let remainedMonths = deadLine.getMonth();
// let remainedHours = deadLine.getHours();
// let remainedMins = deadLine.getMinutes();
// let remainedSec = deadLine.getSeconds();
