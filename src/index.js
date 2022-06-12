const express = require('express');
const app = express();
// al ejecutar el módulo, nos devolverá un objeto, que será almacenado en app.

const path = require('path');
// Módulo preparado para trabajar con directorios. Une directorios y ve si está en Windows o Linux.

// SETTINGS
app.set('port', 3000);
// variable que puede ser accedida desde cualquier parte de mi app.
// definimos la variable, clave ('port'), y su valor ('4000')
app.set('views', path.join(__dirname, 'views'));
//Por lo gral, express sabe donde está la carpeta views. Pero nuestra estructura de proyecto es algo distinta, está todo dentro de src, y node ya no sabe donde esta views. Con esta variable le damos la ruta a 'views'. Le pasamos la dirección con path.


// app.engine('html', require('ejs')renderFile);
// Nosotros estamos usando la extensión '.ejs', pero podríamos cambiarlo a la extensión '.html'. La configuración de arriba nos permitiría hacerlo, simplemente se añade esa línea de código y podremos cambiar la extensión de todos los archivos ejs a html, y todo continuaría funcionando igual, podemos seguir usando la misma funcionalidad de ejs, porque al final desde nuestro servidor está procesando esas sintaxis (con la línea de código de abajo). Cada vez que rendericemos cada uno de estos archivos html (en routes/index.js), tendremos que añadir su extensión ('.html')
// Le decimos, "voy a usar la sintaxis 'html', pero esos archivos que voy a usar, serán procesados por ejs. Requiero ('ejs'). Y voy a renderizarlos usando ese motor de plantillas (renderFile). "


app.set('view engine', 'ejs');
// No es necesario importarlo, Express tiene una buena integración con ejs, el ya lo conoce.

// MIDDLEWARES, funciones que se ejecutan antes de que las rutas procesen algo.


// ROUTES
app.use(require('./routes/index'));
// Importamos la ruta. require('./routes/'), con esto tendríamos la ruta, pero quiero utilizarla, app.use.
// Otra manera es almacenarlo en una const, const indexRoute = require('./routes/index'), y luego app.use(indexRoute); y sería lo mismo.
// Antes nuestra ruta estaba aqui, pero la hemos colocado en un archivo aparte, porque nuestro proyecto irá creciendo y es una manera de mejorar la estructura y será más entendible. Desde aquí, simplemente, las importamos en una sola línea de código. En ese archivo ahora irán todas las rutas de mi proyecto.


// STATIC FILES, archivos estáticos. Al ser Express un framework para crear nuestro servidor. Luego, vamos a necesitar imágenes, fuentes, archivos css y js, íconos y múltiples archivos que luego vamos a querer utilizar para mejorar la interfaz o el front-end de nuestra app. En esta sección es como decirle a Express que ésta carpeta será entregada al navegador.
app.use(express.static(path.join(__dirname, 'public')));
// En public creamos una archivo de css que va a ser importado en todas las vistas. Para hacer eso creamos la carpeta Public (Pública), que va a poder ser accedida desde los archivos views. A este tipo de archivo css se le conoce como archivo estático.
// Le damos la dirección de la carpeta public al módulo de static de express. Esto publicará la carpeta Public desde el navegador, cualquier archivo que cree dentro de ella, va a poder ser accedido desde el navegador. Imágenes, fuentes, pdf, iconos...




// LISTENING SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
// app.get('port'), obtenemos la variable. Al ser parte de app, cada vez que desde mi aplicacion yo llame a app, voy a tener acceso a esa variable, app.set y hacemos usa de ella.