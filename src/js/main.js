const preguntas = document.getElementById("question");
const respuestas = document.getElementById("responses");
const imagenTemplate = document.getElementById('imagenes');

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAWhYg7ooZsREWBlcDS4yCrKUOh2tQhVVk",
  authDomain: "inteligo-hackaton.firebaseapp.com",
  databaseURL: "https://inteligo-hackaton.firebaseio.com",
  projectId: "inteligo-hackaton",
  storageBucket: "inteligo-hackaton.appspot.com",
  messagingSenderId: "212977010921"
};
firebase.initializeApp(config);

let database = firebase.database();

$(document).ready(function () {
  $('.sidenav').sidenav();
});
console.log($('#email').val());

const arr = [];
const ref = firebase.database().ref('/questions');



ref.once('value', (data) => {
//   fetch('./point.json')
// .then((res)=>{
//   return res.json()
// })
// .then((resp)=>{
//   console.log(resp);
  
// })
// console.log(resp);

  position = 0;
  // console.log(data.key.length);
  const response = Object.values(data.val())
  createTemplate(response, position, 5);
  // const id= document.querySelector('input[name='+resp[4]+']:checked').id;
  // console.log(id);
  

  document.getElementById('next').addEventListener("click", () => {
    const val = document.querySelector('input[name="group1"]:checked').value;
    puntage(val);
    if (position = 1) {
      createTemplate(response, position, 3);
      
    }
    document.getElementById('next').addEventListener("click", () => {
      if (position = 2) {
        createTemplate(response, position, 4);
      }
      document.getElementById('next').addEventListener("click", () => {
        if (position = 3) {
          createTemplate(response, position, 5);
        }
        document.getElementById('next').addEventListener("click", () => {
          if (position = 4) {
            imagenFunction('./imagenes/image5.PNG');
            createTemplate(response, position, 5);
          }
          document.getElementById('next').addEventListener("click", () => {
            if (position = 5) {
              imagenTemplate.innerHTML='';
              createTemplate(response, position, 4);
            }
            document.getElementById('next').addEventListener('click', () => {
              if (position = 6) {
                imagenTemplate.innerHTML='';
                createTemplate(response, position, 5);
              }
              document.getElementById('next').addEventListener('click', () => {
                if (position = 7) {
                  imagenFunction('./imagenes/pregunat8.PNG')
                  createTemplate(response, position, 5);
                }
                document.getElementById('next').addEventListener('click', ()=>{
                  $(document).ready(function () {
                    $('.modal').modal();
                  })
                })
              })
              document.getElementById('next').addEventListener('click', () => {
                $(document).ready(function () {
                  $('.modal').modal();
                })

              })
            })
          })

        })

      })

    })

  })

});

// const refAnswers = firebase.database().ref('/puntaje');
// refAnswers.once('value', (data) => {
//   console.log(data.val());

const puntage = (val) => {
  arr.push(val);

  // if (data === val) {
  //   console.log('yay')
  // }
  console.log(arr);
}


// data['group0']

// })


const createTemplate = (response, position, num) => {
  preguntas.innerHTML =  `<p>${response[position].text}</p> `
  respuestas.innerHTML = '';
  for (let i = 1; i <= num; i++) {
    console.log(response[position].text)
    respuestas.innerHTML += `

<p>     
        
        <label for="rpta${i}">
          <input class="with-gap" value="${response[position].options['respuesta' + i]}" name="group1" type="radio" id="rpta${i}"  />
          <span>${response[position].options['respuesta' + i]}</span>
        </label>
</p>  `

  }
  position = position+1;
};

const imagenFunction = (image)=>{
  imagenTemplate.innerHTML= `<img src=${image} alt='perritos'/>`
}


// })
// console.log(dat.key);
// let client = dat.key;
// console.log(dat.val());
//   extraerDataVisitator = visitator.val();
// sendEmailMandrill();


// let total2= 14;

// let total1= 3 + 2 ;

const perfilFunction = (total1, total2) => {
  if (total2 <= 32 && total2 >= 29) {
    if (total1 <= 31 && total1 >= 26) {
      return console.log('agresivo');


    } else if (total1 < 26 && total1 >= 22) {
      return console.log('moderado');
    } else if (total1 < 22 && total2 >= 10) {
      return console.log('conservador');
    }
    return console.log('altamente conservador');
  } else if (total2 < 29 && total2 >= 21) {
    if (total1 <= 31 && total2 >= 28) {
      return console.log('agresivo');
    } else if (total1 < 28 && total1 >= 24) {
      return console.log('moderado');
    } else if (total1 < 24 && total2 >= 12) {
      return console.log('conservador');
    }
    return console.log('altamente conservador');
  } else if (total2 < 21 && total2 >= 13) {
    if (total1 <= 31 && total2 >= 26) {
      return console.log('moderado');
    } else if (total1 < 26 && total1 >= 14) {
      return console.log('conservador');
    } else if (total1 < 14 && total2 >= 4) {
      return console.log('altamente conservador');
    }
    return console.log('defensivo');
  } else if (total2 < 13 && total2 >= 5) {
    if (total1 <= 31 && total2 >= 16) {
      return console.log('conservador');
    } else if (total1 < 16 && total1 >= 6) {
      return console.log('altamente conservador');
    }
    return console.log('defensivo');
  } else {
    if (total1 <= 31 && total2 >= 18) {
      return console.log('conservador');
    } else if (total1 < 18 && total1 >= 8) {
      return console.log('altamente conservador');
    }
    return console.log('defensivo');
  }
}


perfilFunction(10, 24)