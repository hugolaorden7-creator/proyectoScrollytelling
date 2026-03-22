import './style.css'
//https://gsap.com/docs/v3/Plugins/ScrollTrigger/

      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".box", {
        x: 500,
        duration: 2,
        scrollTrigger: ".box"
      });

      gsap.to(".boxA", {
        x: 400,
        rotation: 360,
        duration: 3,
      });
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

        // gsap.to('.btn-cambiar-tema', {
        //     x: 200, 
        //     rotation: 360,
        //     scrollTrigger: {
        //         trigger: '.btn-cambiar-tema',
        //         start: 700,
        //         end: 1000,
        //         scrub: true
        //     }
        // });
      
console.log('a')
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
let tlPagina1 = gsap.timeline({
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
x: 200,
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


    
let tlPagina2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-2',
    start: 'top top',
    end: '+=1000',
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

tlPagina2.to('.figma-cajas', {
  x: -1500,
  duration: 2
});

tlPagina2.to('.figma-caja', {
 opacity: 0,
  y: 100,
  stagger: 0.3,
  duration: 1.5
});

        

        let tlPagina3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.pagina-3',
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true
            }
        });
tlPagina3.from('.descripcion', {
  opacity: 0,
  x: 100,
  duration: 1.5
}, "+=1");
