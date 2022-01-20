const button = document.querySelector('#btn');
const par = document.querySelector('#par');
const citation = [
"«Я этого хочу. Значит, это будет.» - Генри Форд",
"«Если хочешь продлить свою жизнь, укороти свои трапезы.» — Бенджамин Франклин",
"«Все победы начинаются с победы над самим собой.» — Леонид Леонов",
"«Для нас не должно существовать никаких пределов.» — Ричард Бах",
"«Мы – рабы своих привычек. Измени свои привычки, изменится твоя жизнь.» - Роберт Кийосаки",
"«Не проблемы должны толкать вас в спину, а вперед вести мечты.» — Дуглас Эверетт",
"«Стремитесь не к успеху, а к ценностям, которые он дает» — Альберт Эйнштейн",
"«Сложнее всего начать действовать, все остальное зависит только от упорства.» — Амелия Эрхарт",
"«Жизнь - это то, что с тобой происходит, пока ты строишь планы.» — Джон Леннон",
"«Начинать всегда стоит с того, что сеет сомнения.» — Борис Стругацкий"
]

const buttonMusic = document.querySelector('#btnMusic');
let n=1;

buttonMusic.addEventListener ('click', function() {
    if (n % 2 ===0 ){
    document.querySelector('#myMelody').pause();
    n++
    }
    else {
    document.querySelector('#myMelody').play();
    n++
    }
})

button.addEventListener('click', () => {
    let randomCitations = citation [Math.floor(Math.random() * citation.length)];
    par.style.display = 'block';
    par.textContent = randomCitations;
})

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 180,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });