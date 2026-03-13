import './style.css'

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
