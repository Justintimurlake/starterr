// import logo from './pngstarter.png';

// function component() {
//   let m = document.createElement('main');
//   let p = document.createElement('p');
//   let img = document.createElement('img');
//   m.append(p);
//   p.append(img);
//   img.src = logo;
//   img.alt = 'sample logo';
//   return m;
// }

// export default component;

// const one = document.querySelector(".one");
// one.addEventListener("click", () => {

// } );

const y = function  () {
  const onef = document.querySelector('#clockButton1');
  onef.addEventListener('click', () => {
      var myClock  = document.querySelector('.container-main');
      var displaySetting = myClock.style.display;
      var myClock2  = document.querySelector('.container-menu');
      var displaySetting2 = myClock2.style.display;
      var myClock3  = document.querySelector('.container-geo');
      var displaySetting3 = myClock3.style.display;
  
      
      if (displaySetting == 'block') {
          // clock is visible. hide it
          myClock2.style.display = 'none';
          myClock3.style.display = 'none';
          // change button text
        
        }
        else {
          // clock is hidden. show it
          myClock.style.display = 'block';
          myClock2.style.display = 'none';
          myClock3.style.display = 'none';
          // change button text
          
        }
  });
  const twof = document.querySelector('#clockButton2');
  twof.addEventListener('click', () => {
      var myClock  = document.querySelector('.container-main');
      var displaySetting = myClock.style.display;
      var myClock2  = document.querySelector('.container-menu');
      var displaySetting2 = myClock2.style.display;
      var myClock3  = document.querySelector('.container-geo');
      var displaySetting3 = myClock3.style.display;
  
      
      if (displaySetting2 == 'block') {
          // clock is visible. hide it
          myClock.style.display = 'none';
          myClock3.style.display = 'none';
          // change button text
        
        }
        else {
          // clock is hidden. show it
          myClock2.style.display = 'block';
          myClock.style.display = 'none';
          myClock3.style.display = 'none';
          // change button text
          
        }
  });
  const threef = document.querySelector('#clockButton3');
  threef.addEventListener('click', () => {
      var myClock  = document.querySelector('.container-main');
      var displaySetting = myClock.style.display;
      var myClock2  = document.querySelector('.container-menu');
      var displaySetting2 = myClock2.style.display;
      var myClock3  = document.querySelector('.container-geo');
      var displaySetting3 = myClock3.style.display;
  
      
      if (displaySetting3 == 'block') {
          // clock is visible. hide it
          myClock.style.display = 'none';
          myClock2.style.display = 'none';
          // change button text
        
        }
        else {
          // clock is hidden. show it
          myClock3.style.display = 'block';
          myClock.style.display = 'none';
          myClock2.style.display = 'none';
          // change button text
          
        }
  });
  };
  
  export default y;


