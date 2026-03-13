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
      
