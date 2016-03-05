var clock;
function startClock(time) {
    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: true,
        callbacks: {
            stop: function () {

            }
        }
    });

    clock.setTime(time);
    clock.setCountdown(true);
    clock.start();
}
function resetClock(time) {
    clock.setTime(time);
}