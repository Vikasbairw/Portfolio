
//send msg on eamil  Start
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

//End point ......

  /*color part Start*/
  const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
  styleSwitcherToggle.addEventListener('click',
    ()=>{
      document.querySelector('.style-switcher').classList.toggle('open')
      
    }
  )
  window.addEventListener('scroll',
    ()=>{
      if(  document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
      }
    }
  )

  /*night */
  const daynight = document.querySelector('.day-night');
  daynight.addEventListener(
    'click',
    ()=>{
      if(daynight.querySelector('i').classList.contains('fa-moon')){
        daynight.querySelector('i').classList.remove('fa-moon')
        daynight.querySelector('i').classList.add('fa-sun')
      }else if(daynight.querySelector('i').classList.contains('fa-sun')){
        daynight.querySelector('i').classList.add('fa-moon')
        daynight.querySelector('i').classList.remove('fa-sun')
      }
      
    }
  )


/*change the color theams Start*/
const getAllColor=document.querySelectorAll('.color');
getAllColor.forEach(
  function (eachcolor){
    eachcolor.addEventListener('click',(e)=>{
const getcolorValue=e.target.dataset.color;

//ye root ke anther value dalne ke liye use karte h (root_property,setvalue)
document.documentElement.style.setProperty('--skin-color',getcolorValue)
//ye root ke anther ki jo value set hui h na vo dekh sakte h
// console.log(document.documentElement.style.getPropertyValue('--skin-color'))
    })
  }
)

/*Change the color theams End*/
// if(document.getElementsByClassName('.fa-sun')==true){
//   console.log("hello")
// }
// const getsun_moon = document.querySelector('.fa-moon');
// getsun_moon.addEventListener('click', () => {
//   document.documentElement.style.setProperty('--bg-black-900', '#0e0e0f');
//   document.documentElement.style.setProperty('--bg-black-100', '#252526');
//   document.documentElement.style.setProperty('--bg-black-50', '#343335');
//   document.documentElement.style.setProperty('--text-black-900', '#e7e6ed');
//   document.documentElement.style.setProperty('--text-black-700', '#f0eff4');
// });


const getsun_sun = document.querySelector('.fa-sun');
getsun_sun.addEventListener('click', () => {
  document.documentElement.style.setProperty('--bg-black-900', '#0e0e0f');
  document.documentElement.style.setProperty('--bg-black-100', '#252526');
  document.documentElement.style.setProperty('--bg-black-50', '#343335');
  document.documentElement.style.setProperty('--text-black-900', '#e7e6ed');
  document.documentElement.style.setProperty('--text-black-700', '#f0eff4');
});



const resume_show=document.querySelector('.show');
resume_show.addEventListener('click',
  function(e){
    document.querySelector('.resume_show').classList.toggle('resume_cover')
    
  }
)

const remove_show=document.querySelector('.resume_show');
remove_show.addEventListener('click',
  function(e){
    document.querySelector('.resume_show').classList.toggle('resume_cover')
    
  }
)