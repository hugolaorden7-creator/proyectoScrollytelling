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

        gsap.to('.btn-cambiar-tema', {
            x: 200, 
            rotation: 360,
            scrollTrigger: {
                trigger: '.btn-cambiar-tema',
                start: 700,
                end: 1000,
                scrub: true
            }
        });
      
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