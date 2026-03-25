import './style.css'
//https://gsap.com/docs/v3/Plugins/ScrollTrigger/

    gsap.registerPlugin(ScrollTrigger);


//hugo
const tl2 = gsap.timeline();

tl2.from(".orange", { xPercent: -100 })
  .from(".purple", { xPercent: 100 })
  .from(".green", { yPercent: -100 });

ScrollTrigger.create({
  animation: tl2,
  trigger: "#container",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1
});
//hugo
    gsap.to(".box", {
        x: 500,
        duration: 2,
        scrollTrigger: ".box"
      });


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
            gsap.to(".pg2", {
            scrollTrigger: {
                trigger: ".pg2",
                start: "start start",
                end: "+=1000",
                pin: true, 
                toggleActions: "restart pause reverse pause"
                },
            });
          gsap.to(".revelado", {
        scrollTrigger: {
          trigger: ".revelado",
          start: "top 60%", // Empieza cuando el top de la sección llega al 60% de la pantalla
          end: "top 20%", // Termina cuando llega al 20%
          scrub: 1, // La animación sigue al dedo/rueda del ratón suavemente
                  markers: true, // Mostrar guías (quitar esta línea para producción)
                          pin: true, 
                toggleActions: "restart pause reverse pause"

        },
        opacity: 1,
        duration: 1.5,
      });
      
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
   gsap.registerPlugin(ScrollTrigger);
        gsap.to('.caja', {
            x: 200
        })
        gsap.from('.caja2', {
            ease: 'bounce.out',
            x: 200,
            rotation: 360,
            duration: 2,
            scale: 2,
        })
        gsap.fromTo('.caja3', {
            duration: 2,
            backgroundColor: 'red',
            x:0
        }, {
            duration: 2,
            backgroundColor: 'blue',
            x:240,
            y: -80
        })

        gsap.to('.item', {
            scale: 0,

        repeat:-1,
        yoyo: true,
            stagger: {
                /*
                grid: [9,5],
                from: 22,
                amount: 1.5,*/
                each: 0.2,
                from: 'center',
                grid: [9,5],
            },
        })
       

        gsap.to('.btn-cambiar-tema', {
            x: 200, 
            rotation: 360,
            scrollTrigger: {
                trigger: '.btn-cambiar-tema',
                start: 500,
                end: 1000,
                scrub: true
            }
        });
        


        
      <section class="flex flex-row items-center gap-10 angular-cajas3">
        <!--Caja1-->
        <div class="angular-caja">
          <div class="h-70">
            <!--El " blur-sm "es para el difucminado-->
            <img
              src="public/zelda.jpg"
              class="w-full h-full object-cover border-2 border-slate-400"
              alt="Obra"
            />
          </div>
          <h3 class="text-lg">Titulo</h3>
          <p class="uppercase text-xs text-descripciones">Descripcion</p>
        </div>

        <!--Caja2-->

        <div class="angular-caja opacity-0">
          <div class="h-70">
            <!--El " blur-sm "es para el difucminado-->
            <img
              src="public/zelda.jpg"
              class="w-full h-full object-cover border-2 border-slate-400"
              alt="Obra"
            />
          </div>
        </div>

        <!--Caja3-->

        <div class="angular-caja angular-caja">
          <div class="h-70">
            <!--El " blur-sm "es para el difucminado-->
            <img
              src="public/zelda.jpg"
              class="w-full h-full object-cover border-2 border-slate-400"
              alt="Obra"
            />
          </div>
          <h3 class="text-lg">Titulo</h3>
          <p class="uppercase text-xs text-descripciones">Descripcion</p>
        </div>
      </section>