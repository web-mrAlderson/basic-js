const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;





  module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== 'string') {
      return false
    }
    let  samp = parseFloat(sampleActivity);
    if (samp <=0 || samp >= 15) {
      return false
    }
    const regx = /^[0-9].*$/.test(sampleActivity);
    if(regx) { 
      let rate = 0.693/HALF_LIFE_PERIOD;
      let a = MODERN_ACTIVITY/samp;
      return Math.ceil(Math.log(a)/rate);
    }
    return false;
  
  };

