import './style.css'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

gsap.to('.figma', {
  y: 200
})


let tlPagina2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-2',
    start: 'top top',
    end: '+=1100',
    scrub: true,
    pin: true
  }
});


tlPagina2.from('.figma-logo', {
  y: -100,
  opacity: 0
})

tlPagina2.to('.figma-logo', {
  width: 100,
})

tlPagina2.fromTo('.figma-title', {
    opacity: 0,
    display: 'none'
},{
    opacity: 1,
    display: 'block',
})

tlPagina2.to('.figma', {
  y: -50, 
})

tlPagina2.fromTo('.figma-descripcion', {
    display: 'none',
    opacity: 0
},{
    display: 'block',
    opacity: 1,
},  "-=0.5")

tlPagina2.to('.figma-descripcion', {
    display: 'none',
    opacity: 0,
});

tlPagina2.to('.figma', {
    y: -100,
})

tlPagina2.from('.figma-separador', {
  opacity: 0,
  display: 'none'
})

const tituloPaginaSplit = SplitText.create('.titulo-pagina-2', {type: 'chars'})

tlPagina2.from(tituloPaginaSplit.chars, {
  display: 'none',
  opacity: 0,
  stagger: 0.05,
  x:-100
});


tlPagina2.from('.figma-caja', {
  opacity: 0,
  y: 100,
  stagger: 0.3,
  duration: 1.5
}, "+=1");
//primera accion

tlPagina2.to('.figma-caja-2 ', {
  scale: 0.8,
  duration: 1.5
}, "+=0.5");

tlPagina2.to('.figma-caja-3', {
  scale: 0.8,
  duration: 1.5
}, "<");

tlPagina2.to('.figma-caja-1', {
  scale: 1.1,
  duration: 1
}, "<"); 
//Segunda accion
tlPagina2.to('.figma-caja-1', {
  scale: 0.8,
  duration: 1.5
}, "+=0.5");

tlPagina2.to('.figma-caja-2', {
  scale: 1.1,
  duration: 1
}, "<"); 
//tercera accion
tlPagina2.to('.figma-caja-2', {
  scale: 0.8,
  duration: 1.5
}, "+=0.5");

tlPagina2.to('.figma-caja-3', {
  scale: 1.1,
  duration: 1
}, "<"); 




//FINAL de las cajas
tlPagina2.to('.figma-caja', {
  scale: 1,
  duration: 2
}, "+=1");

tlPagina2.to('.figma-cajas', {
  opacity: 0,
  scale: 0.5,
  duration: 2
}, "+=1");


// El logo se cae

tlPagina2.to('.figma', {
  y: 10,
  rotate: 30,
  ease: 'bounce',
  duration: 2
})

tlPagina2.to('.figma-separador', {
  y: '100vh',
  x: 300,
  rotate: 60,
  duration: 3
}, '-=1.4')

tlPagina2.to('.figma-separador', {
  opacity: 0,
  duration: 1
}, '<')

tlPagina2.to('.titulo-pagina-2', {
  y: '100vh',
  x: 300,
  rotate: 60,
  duration: 2
}, '-=2.1')

tlPagina2.to('.titulo-pagina-2', {
  opacity: 0,
  duration: 1
}, '<')

tlPagina2.to('.figma-logo', {
  y: '100vh',
  x: 300,
  rotate: 60,
  duration: 2
}, '-=1.3')

tlPagina2.to('.figma-logo', {
  opacity: 0,
  duration: 1
}, '<')

tlPagina2.to('.figma-title', {
  y: '100vh',
  x: 300,
  rotate: 60,
  duration: 2
}, '<')

tlPagina2.to('.figma-title', {
  opacity: 0,
  duration: 1
}, '<')

tlPagina2.to('.pagina-2', {
  opacity: '0'
 
})


const tlPagina3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-3',
    start: 'top top',
    end: '+=1500',
    scrub: true,
    pin: true,
  }
});

tlPagina3.from('.angular-logo', {
  opacity: 0,
  x:100
});
tlPagina3.from('.angular-cajas-1', {
  y: 100,
  duration: 1
});

tlPagina3.from('.angular-cajas-2', {
  autoAlpha: 0,
  
});
tlPagina3.from('.angular-cajas-3', {
  autoAlpha: 0,
});



// tlPagina3.to('.angular-logo', {
//   y: -100,
//       duration: 1.5

// });

// tlPagina3.from('.angular-caja', {
//   opacity: 0,
//   x: 100,
//   stagger: 0.3,
//   duration: 1.5
// }, "+=1");
tlPagina3.to('.angular-caja ', {
  y: -150,
  duration: 1.5,
}, "+=2");



tlPagina3.to('.angular-cajas-2 ', {
  autoAlpha: 1,
  opacity: 1
}, "<");

tlPagina3.to('.angular-cajas-3 ', {

  autoAlpha: 1,
}, "<");

tlPagina3.to('.angular-logo ', {
  y: -100,
  duration: 1.5
}, "<");
tlPagina3.to('.descirpcion-angular', {
  y: -100,
  opacity: 0,
  duration: 1.5
}, "<");

tlPagina3.to('.angular-caja-1 ', {
  opacity: 0,
  duration: 1.5
}, "<");

tlPagina3.to('.angular-caja ', {
  y: -770,
  duration: 1.5
}, ">");

tlPagina3.to('.angular-caja-2 ', {
  opacity: 0,
  duration: 2.5
}, "<");









let theme = localStorage.getItem('theme');
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches

// Comprueba si ha sido la primera vez que el usuario entra a la pagina que estilo debe tener la pagina
if(!theme && isDark) {
    theme = 'dark'
}
else if(!theme) {
    theme = 'light'
}

// Si el tema del usuario es oscuro la pagina se vuelve modo oscuro
if(theme == 'dark') { document.documentElement.classList.add('dark') }

// Boton de cambio de tema
const themeSwitch = document.getElementById('theme-switch');
      
// Listener de click para el boton del cambio de tema que cambia y guarda el estilo de la pagina
themeSwitch.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark'); 

    if(theme && theme == 'dark') { localStorage.setItem('theme', 'light') }
    else if(theme) { localStorage.setItem('theme', 'dark') }
})
