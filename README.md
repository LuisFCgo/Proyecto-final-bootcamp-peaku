Este proyecto fue realizado por Juan Carlos Chavez y Luis Fernando Cardona, en tecnología React, node.js y express mongodb. 
Para el frontend se utilizó React y para el backend se utilizó node.js; la base de datos fue implementada en mongodb y fue consumida mediante
el framework express para la creación d esu servidor.
La pagina web está basada en un una app de reservas turisticas, en donde se puede observar diferentes destinos para los cuales se eligen diferentes
hoteles y se escoge la fecha de reserva.
En el desarrollo del backend se utiliza express ya que con este, de una manera mas resumida se puede establecer el servidor para el llamado a la base de datos la cual se utilizó
mongodb estableciendo su conexión por el puesrto 4000 y todo esto se logra aplocando estos parámetros a una constante definida como connectdb, en la cual está contenida
la conexión a la base de datos, promordialmente se inicia desarrollando un componente llamado AuthController el cual posee integradoel consumo de la API para la creación de regitro 
para la conexión a al login, para el deslogueo a nuestra aplicación.
Definido esto se establece las rutas de estos microservicios contenidas en el AuthRoutes, donde cada una tiene su segmentación por peticiones post para el logueo y deslogueo
de la misma; se defien el modelo donde están requeridos los parámetros de ingreso y extracción a la base de datos para que de una manera mas eficiente mongodb al ingresar
el primer registro defina por si solo los campos en la base de datos, posteriormente a esto para la seguridad se procede a crear el componente que nos habilita un token
el cual es guardado y extraido hacia otros componentes por el Rest cooking como un objeto JSON el cual es parseado por el parse cocking, cabe destacar que para la creación del
token se utilizó la libreria JSON web token donde se importa un componente llamado token secret que contendría la especie de incriptación del token.
Para la interaccíon de todos los componentes definidos en el backend con el frontend, se utilizó la libreria cors, la cual se en App.js, indicando el puerto de origen del frontend 
que seria el puerto 3000.
Para el frontend se crea el proyeto en React con el comando npx create-react-app frontend, donde se establece de manera práctica una interfaz genérica de react editable
para ello, verificando dentro de su carpeta src creamos la carpeta components la cual es la carpeta escencia que contiene nuestro proyecto, iniciando con un componente home
que es nuestra interfaz inicial contenida por microelementos renderizados cada uno de ellos de manera independiente. Para el llamado de cada uno de estos componentes instalamos 
un paquete de rutas, donde contendrá la segmetación e importación de los componentes para ser visualizados desde el explorador. Para la creacion de blog, lista de hoteles y habitaciones
se renderizaron estos componentes mediante un state que a su vez fueron llamados por una plantilla definida en props alternativas que fueron consumiendo estos state reutilizando código
y desplegando el listado de esta plantilla. Para la generación del dia de reserva de habitaciones fueron generados por un componente identificado como dateRangepicker lo cual tiene 
integrado una calculadora donde el endDate fueron restados por el starDate definiendo el numero de dias y multiplicado por el pricePerDay (características del state absobidas por los prop)
definiendo asi el precio total a pagar. Para el componente barra se establecen inicialmente que no se puedan observar enlavces si el usuario no está ioggeado por ello se debe registrar como primero
en el botón signup; una vez el regisrto de hace satisactorio la pagiana lo redirija a la interfaz del loggin para que el usuario pueda ingresar; una vez loguedo la pagian lo reedirige  a
al home diferente mostrando un saludo de bienvenida con el nombre de usuario y activando los enlaces de los componentes que dispone la aplicación.
Para poner en funcionamiento la simulación de este aplicativo se debe ejecutar de manera simultánea e independiente dos consolas, una para conectarme a frontend con el
comando npm start y para el backend con el comando npm run dev, y se necesita tener instalado mongo db para la creación e instalación de la base de datos.
