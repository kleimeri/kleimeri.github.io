let frameCount = function _fc(fastTimeStart, preciseTimeStart) {

  let now = performance.now();

  let fastDuration = now - (fastTimeStart || _fc.startTime);
  let preciseDuration = now - (preciseTimeStart || _fc.startTime);

  if (preciseDuration < 1000) {

    _fc.preciseCounter++;

  } else {

    _fc.preciseFPS = _fc.preciseCounter;
    _fc.preciseCounter = 0;
    preciseTimeStart = now;
    console.log(_fc.preciseFPS);

  }

  requestAnimationFrame(() => frameCount(fastTimeStart, preciseTimeStart));
};

frameCount.fastCounter = 0;
frameCount.fastFPS = 0;
frameCount.preciseCounter = 0;
frameCount.preciseFPS = 0;
frameCount.startTime = performance.now();

frameCount(); 