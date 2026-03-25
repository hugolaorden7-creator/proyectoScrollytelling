import './style.css'

//https://gsap.com/docs/v3/Plugins/ScrollTrigger/

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText) 

const contenedorFondo = document.getElementById("contenedor-fondo")

for(let i=0; i<105; i++) {
  const fondoCaja = document.createElement("div");

  fondoCaja.classList = [
    "fondo-caja size-30 border border-blue-400"
  ]

  contenedorFondo.appendChild(fondoCaja)
}


gsap.fromTo('.fondo-caja',{
  scale:1,
  opacity: 0.4,
  
}, {
  scale: 0.1,
  opacity: 0,
  stagger: {
    //grid: [7,15],
    from: "center",
    amount: 3,
    repeat: -1,
  },
  duration: 8
})


//-------------Pagina 1-------------

const tlPagina1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-1',
    start: 'top top',
    end: '+=500',
    scrub: true,
    pin: true
  }
});

tlPagina1.from('.inicio-descripcion', {
    opacity: 0,
    y: 50
});

tlPagina1.to('.btn-cambiar-tema', {
  x: 10,
      opacity: 0,

rotation: 360
});

let tpl = gsap.timeline({
  repeat: -1
});

tpl.to('.giro', {
  rotation: 360,
  duration: 2,
  ease: "linear"
});

//-------------Pagina 1-------------

//-------------Pagina 2-------------

// Para que el icono de figma este en el centro de la pantalla
gsap.to('.figma', {
  y: 200
})    

const tlPagina2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-2',
    start: 'top top',
    end: '+=1000',
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
      
//-------------Pagina 2-------------

//-------------Pagina 3-------------

const tlPagina3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-3',
    start: '-=500',
    end: '+=1500',
    scrub: true,
    pin: true,
  }
});
//primera animacion

tlPagina3.from('.angular-logo', {
  opacity: 0,
  x:100
});


tlPagina3.from('.pagina-3 h1', {
  y: 100,
  opacity: 0,
  filter: "blur(10px)", //difuminado
  duration: 1.5,
});

tlPagina3.from('.pagina-3 p', {
  opacity: 0,
  stagger: 0.5,
  duration: 1.5,
}, "-=0.5");

tlPagina3.to('.pagina-3 h1, .pagina-3 p', {
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  duration: 1,
  delay: 1
});

// animacion cajas


tlPagina3.from('.angular-cajas-1', {
  opacity: 0,
})

tlPagina3.to('.angular-logo', {
  y: -160,
  duration: 2
}, "<")

tlPagina3.to('.angular-caja', {
  y: -810,
  duration: 1.5
})

tlPagina3.from(".angular-cajas-2", {
  opacity: 0
}, "<")

tlPagina3.to(".angular-cajas-1 > .angular-caja", {
  opacity: 0
}, "<")





tlPagina3.from(".angular-cajas-3", {
  opacity: 0,
  delay: 0.4
}, "<")

tlPagina3.to(".angular-cajas-2", {
  opacity: 0
}, "<")


/* Difuminado
tlPagina3.from('.pagina-3 h1', {
  y: 100,
  opacity: 0,
  filter: "blur(10px)", //difuminado
  duration: 1.5,
});

tlPagina3.from('.pagina-3 p', {
  opacity: 0,
  stagger: 0.5,
  duration: 1.5,
}, "-=0.5");

tlPagina3.to('.pagina-3 h1, .pagina-3 p', {
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  duration: 1,
  delay: 1
});*/



//-------------Pagina 3-------------

//-------------PaginaUltima-------------

const tlPagina4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-4',
    start: 'top top',
    end: '+=200',
    scrub: 1,
    pin: true
  }
});


// split elements with the class "split" into words and characters
const split = SplitText.create(".split", { type: "words, chars" });

// now animate the characters in a staggered fashion
tlPagina4.from(split.chars, {
  duration: 1, 
  y: 100,       // animate from 100px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05 // 0.05 seconds between each
});

let theme = localStorage.getItem('theme');
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches


//-------------PaginaUltima-------------

//-------------Manejador de temas-------------



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

// localStorage.removeItem('theme') // Solo para probar si se pone el estilo por defecto del usuario

    //     gsap.to('.pagina-2', {
    //         scrollTrigger: {
    //             trigger: '.pagina-2',
    //             pin:true,                
    //             start: 'top top',
    //             end: '+=2000',
    //         }
    //     })
    //     gsap.fromTo('.figma-logo', {
    //         width: 300,
    //     },{
    //         width: 100,
    //         scrollTrigger: {
    //             trigger: '.figma-logo',
    //             start: '+=300',
    //             end: '+=1000',
    //             toggleActions: "restart pause reverse pause"
    //         }
    //     })

    //     gsap.fromTo('.figma-title', {
    //         opacity: 0,
    //         display: 'none'
    //     },{
    //         opacity: 1,
    //         display: 'block',
    //         scrollTrigger: {
            
    //             trigger: '.figma-title',
    //             start: '+=300',
    //             end: '+=1000',
    //             toggleActions: "restart pause reverse pause"
    //         }
    //     })

    // gsap.fromTo('.figma-caja', {
    //         opacity: 0,
    //         display: 'none'
    //     },{
    //         opacity: 1,
    //         display: 'block',
    //         scrollTrigger: {
            
    //             trigger: '.figma-caja',
    //             start: '+=600',
    //             end: '+=1000',
    //             toggleActions: "restart pause reverse pause"
    //         }
    //     })
    
    



//-------------Pagina 1-------------

//-------------Pagina 2-------------


/*
let tlPagina2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-2',
    start: 'top top',
    end: '+=500',
    scrub: true,
    pin: true
  }
});

tlPagina2.fromTo('.figma-logo', {
  scale: 1.5
}, {
  scale: 0.6,
  duration: 1
});

tlPagina2.from('.figma-title', {
  opacity: 0, //no se ve al principio
  y: 50,
  duration: 1
}, "-=0.5"); //solapa con el siguiente

tlPagina2.from('.figma-descripcion', {
  opacity: 0,
  x: 100,
  duration: 1.5
}, "+=1");

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


//FINAL
tlPagina2.to('.figma-caja', {
  scale: 1,
  duration: 2
}, "+=1");

tlPagina2.to('.figma-cajas', {
  opacity: 0,
  scale: 0.5,
  duration: 2
}, "+=1");*/

//-------------Pagina 2-------------



//-------------Pagina3-------------


/**
 //Estados del scrollTrigger en toggleActions; play pause resume reverse reset complete none
    gsap.to(".boxB", {
        scrollTrigger: {
            trigger: ".boxB",
            toggleActions: "restart none none none"
            },
        x: 400,
        rotation: 360,
        duration: 3,
    });
      
       gsap.to(".boxC", {
        scrollTrigger: {
            trigger: ".boxC",
            markers:true,
            toggleActions: "restart pause reverse pause"
            },
        x: 400,
        rotation: 360,
        duration: 3,
       });


        let tl = gsap.timeline({
             scrollTrigger: {
                trigger: ".boxD",
                start: "top center",
                end: "top 100px",
                scrub: 2,
                markers:true,
            },
        })

        tl.to(".boxD", {
            x: 400,
            rotation: 360,
            ease: "none",
            duration: 3,
        })
        .to(".boxD", {
            backgroundColor: "purple",
            duration: 1
        })
        .to(".boxD", {
            x: 0,
            duration: 3
        })

        gsap.to(".boxE", {
            scrollTrigger: {
                trigger: ".boxE",
                start: "top center",
                end: "top 100px",
                markers: true,
                pin: true, 
                toggleActions: "restart pause reverse pause"
                },
            x: 400,
            rotation: 360,
            ease: "none",
            duration: 3,
        });
 */