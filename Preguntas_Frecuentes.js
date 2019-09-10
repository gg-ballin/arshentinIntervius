PREGUNTAS FRECUENTES EN ENTREVISTAS DE FRONT END EN REACT Y REDUX:


1. Diferencia entre ForEach y Map en Javascript:

ForEach: No devuelve nada sino que cambia los valores del array original mediante callback function.

Map: Devuelve un nuevo array con los resultados de la callback function.

-------------------------------------------------------------------------------------------------------------

2. High Order Component:

Cuando pasas un componente a una funcion, y este devuelve un nuevo componente, eso es un High Order Component.
Un Higher Order Component es una forma avanzada de reusar la logica de un componente. HOC son componentes
customizados que envuelven otro componente dentro de ella. Son componentes puros.

-------------------------------------------------------------------------------------------------------------

3. Cuando usar Redux?:

Redux ofrece acceso a componentes globales desde cualquier lugar de la app. A veces puede o no necesitarlo.
Por ejemplo si un High Order Component tiene muchas props y solo se usan 2, todas las demas que son pasadas a 
un componente de menor nivel tambien, cosa que no es muy practica. Entonces es mejor usar Redux.
Hace mas mantenible al codigo y mas facil de entender.

-------------------------------------------------------------------------------------------------------------

4. Que es Flex-Box?:

El Flexible Box Layout Module hace mas facil la estructura de disenio flexible responsive sin usar posicionamiento
o float. Permite colocar elementos de una pagina para que se comporten de forma predecible cuando el disenio de 
pagina debe acomodarse a diferentes tamanios de pantalla y deferentes dispositivos. Es mas sencillo de utilizar que
el modelo "bloque". Los elementos hijos de una flexbox pueden colocarse en cualquier direccion y pueden tener
dimensiones flexibles para adaptarse al espacio visible.

-------------------------------------------------------------------------------------------------------------

5. Que es el Virtual DOM y en que se diferencia con el DOM?:

DOM: Document Object Model. Es una interfaz de plataforma que proporciona un conjunto estandar de objetos para 
representar documentos de tipo HTML, XHTML T XML. Elementos de HTML se convierten nodos en el DOM. SIempre que el 
estado de la UI cambia, el DOM se actualiza para representar los cambios, aunque puede ser lastimosamente lento.

Virtual DOM: Es una representacion virtual del DOM que nuestra app construye, siendo el Virtual DOM una copia del
DOM. Cuando el estado the la aplicacion cambia, el virtual DOM es el que cambia y no el DOM del navegador. Luego 
el Virtual DOM encuentra una forma de actualizar el DOM.

Diferencia: El DOM, una vez que tiene muchos problemas cuando quiere manipular grandes numeros de nodos. Ahi es 
donde entra React y su virtual DOM, que soluciona estos problemas.

-------------------------------------------------------------------------------------------------------------

6. Que es Redux?:

Redux es una libreria de Javascript. Se encarga de desacoplar el estado global de una aplicacion web (Front) de la parte
visual, es decir, los componentes. Pero ahora, que es el estado de una aplicacion? NOrmamlemente se trata de los datos
que podes recibir a traves de una API REST O WebService (una lista de productos por ejemplo), tambien se refiere al 
estado de la UI en un determinado momento , por ejemplo: un panel esta desplegado o no, tiene que aparecer la 
informacion del usuario o no, un mensaje de error, etc.
Propone que haya un unico store. Todo el estado queda almacenado en un arbol. El estado es de solo lectura, solo podemos
leer de el para representarlo en la vista y si queremos modificarlo, lo tenemos que hacer a traves de acciones. Una 
accion es simplemente un objeto Javascript que incluye al menosun atriubto type que indica el tipo de accion que estamos 
emitiendo y en caso de que haya datos asociados al cambio o modificacion, un atributo payload con esos datos. Estas 
acciones suelen devolverse a traves de un Action Creator. Ya que no podemos modificar el estado directamente (solo a 
traves de acciones) y el estado esta almcaenado en un unico store, para especificar como realizar cambios en el arbol 
del estado utilizamos funciones puras llamadas reducers. Una funcion pura es una funcion que ante los mismos datos de 
entrada devuelve el mismo resultado. Siempre recibe dos parametros, el estado inicial y la accion y dependiendo del tipo
de acciion realizara una operacion u otra en el estado. No podemos modificar el estado sino crear una copia a partir del
anterior.

-------------------------------------------------------------------------------------------------------------

7. Que es la programacion funcional?:

La programacion funcional es un paradigma de programacion. Es una forma de pensar en como se organiza un programa 
basado en una serie de principios. Otros conocidos son Progamacion orientada a objetos y Programacion por 
procedimientos. La programacion funcional es declarativa y no imperativa como POO. Esto quiere decir que 
en estilo funcional expresamos nuestra logica sin describir el "control de flujo" (bucles, condicionales, ...)
enfocandonos en "que" estamos haciendo, en vez de "como" se esta haciendo, que seria el enfoque 'imperativo'.
En vez de usar un for, se usa un filter (funcion) para hacer lo mismo que en un for. 10 lineas de codigo 
resumida en una. Ejemplo: 

Declarativa: 
    function intersection(a, b) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            break;
        }
        }
    }

    return result.sort();
________________________________________________________________
 
Funcional:

const intersection = (a, b) => a.filter(value => b.indexOf(value) > -1).sort()

________________________________________________________________

Pros:

- Tiende a ser mas conciso y expresivo.

- Mas predecible.

- Javascript tiene una naturaleza mas funcional que imperativa.

- Se presta a los paradigmas asincronicos y dirigidos por eventos.

Contras:

- Puede ser desconcertante al principio.

- Puede requerir mas recursos al estar menos orientado a la maquina y mas al humano.
 
- Es menos comun y por ende hay menos informacion.

-------------------------------------------------------------------------------------------------------------

8. Que es React?:

React es una libreria Front-End de Javascript que sigue un enfoque basado en componentes que ayuda a construir
componentes reusables. Es usado para desarrollar complejos e interactivas UI tanto web como mobile. Usa el 
Virtual DOM en vez del DOM. Usa server-side rendering. Usa enlace de datos. Utiliza JSX que hace que sea mas 
legible. Es mas facil de testear.


-------------------------------------------------------------------------------------------------------------

9. Que es JSX?:

Es un tipo de archivo usado por React que utiliza la expresisividad de Javascript junto con HTML como sintaxis
de plantillas. Esto hace que el archivo HTML sea facil de entender. 

-------------------------------------------------------------------------------------------------------------

10. Explica el proposito de render() en React:

Cada componente de React tiene que tener el metodo render() de forma excluyente. Retorna un solo elemento React
(por lo general si tiene varios elementos hijos se retorna solo un <div> con los tags dentro) que es la 
representacion del DOM nativo. Esta funcion debe ser pura siempre, debe retornar el mismo resultado siempre que
es invocada.



-------------------------------------------------------------------------------------------------------------

11. Que son las props?:

Son componentes read-only que deben mantenerse inmutables. Son pasados siempre desde el componente padre al 
componente hijo a lo largo de la aplicacion. Un componente hijo nunca puede mandar una prop de vuelta al 
componente padre. 



-------------------------------------------------------------------------------------------------------------

12. Que es el state en React y como se usa?:

El estado en react es el corazon de los copmonentes de React. El estado es la fuente de datos y debe ser 
lo mas simple posible. Basicamente, los estados son objectos que determinan la renderizacion y comportamiento
de los componentes. Se puede acceder al estado con this.state(); .

-------------------------------------------------------------------------------------------------------------

13. Diferencias entre state y props:


                Conditions	                            State	Props
1. Recibe valor inicial de componente padre	            Si	     Si
2. Componente padre puede cambiar valor	                No  	 Si
3. Setear valor por default dentro del componente	    Si	     Si
4. Cambios dentro del componente                        Si	     No
5. Setear valor inicial para componentes hijos          Si	     Si
6. Cambios dentro de componentes hijos                  No	     Si


-------------------------------------------------------------------------------------------------------------

14. Que es una arrow function?:

Arrow function son una forma simplificada de escribir una funcion. Estas funciones permiten enlazar 
adecuadamente el contexto de los componentes. Son mas utiles con High Order Functions.

-------------------------------------------------------------------------------------------------------------

15. Explique en detalle los métodos de ciclo de vida de los componentes React:

    I.   componentWillMount() - Se ejecuta antes de que la renderizacion se lleve a cabo tanto en el cliente
                                como en el server-side.
    
    II.  componentDidMount() - Se ejecuta en el lado del cliente solo despues del primer render().
    
    III. componentWillRecieveProps() - Se invoca en el momento en el que las props son recibidas desde la 
                                       clase pariente y antes que otro render sea llamado.
    
    IV.  shouldComponentUpdate() - Devuelve un booleano basado en ciertas condiciones. Si queres que tu 
                                   componente se actualice, retorna true o, false.
    
    V.   componentWillUpdate() - Se llama justo luego de la renderizacion se lleva acabo en el DOM.
    
    VI.  componentDidUpdate() - Se llama justo despues de que el render() se haya llevado a cabo.
    
    VII. componentWillUnmount() - Se llama despues de que el componente es desmontado del DOM. Se usa para
                                  hacer un clear up de los espacios en memoria.

-------------------------------------------------------------------------------------------------------------

16. Como se modulariza codigo en React?:

Se puede modularizar codigo usando las propiedades export e import. Ayudan a escribir los componentes de forma
separada en distintos archivos. Ejemplo:

        //ChildComponent.jsx
        export default class ChildComponent extends React.Component {
            render() {
                return(           
                    <div>             
                        <h1>This is a child component</h1>
                    </div>
                );
            }
        }
        
        //ParentComponent.jsx
        import ChildComponent from './childcomponent.js';
        class ParentComponent extends React.Component {    
            render() {        
                return(           
                    <div>               
                        <App />          
                    </div>       
                );  
            }
}

-------------------------------------------------------------------------------------------------------------

17. Que se puede hacer con un High Order Component?:

Se puede utilizar para:

1. Reutilizacion de codigo.
2. Abstraccion del estado y la manipulacion.
3. Manipulacion de props.

-------------------------------------------------------------------------------------------------------------

18. Que es un componente puro?:

Componentes puros son la forma mas rapida y simple de escribir. Pueden reemplaza cualquier componente que solo
tenga una funcion render(). Estos componentes mejoran la simplicidad de codigo y la performance de la app.

-------------------------------------------------------------------------------------------------------------

19. Cuales eran los mayores problemas con los frameworks MVC?:

1. Manipulacion del DOM es muy cara.
2. Aplicaciones son lentas e ineficientes.
3. Habia un desperdicio enorme de memoria.
4. Se creaba un modelo complicado alrededor modelos y vistas.

-------------------------------------------------------------------------------------------------------------

20. Cuales son los 3 principios de Redux?:

    I.   Single source of truth: El estado de la aplicacion entera es guardada en un objeto/state tree dentro de 
         un solo store. El single state tree lo hace mas facil para hacer un seguimiento de los cambios a lo largo
         del tiempo y para hacer debugging o inspecciones de la aplicacion.
    
    II.  State is read-only: La unica forma de cambiar el estado es disparar una accion. Una accion es un objeto
         plain-JS que describe el cambio. La accion es la minima representacion del cambio a la data.
    
    III. Cambios son hechos con funciones puras: En orden de especificar como el state tree es transformado por 
         acciones, necesitas funciones puras. Funciones puras son las que retornan valores dependiendo solamente
         de los valores de sus argumentos.

-------------------------------------------------------------------------------------------------------------

21. Cuales son los componentes de Redux?:

Redux esta compuesto de los siguientes componentes:
    I.   Accion: Es un objeto que describe que paso.
    II.  Reducer: Es un lugar que determina como el estado va a cambiar.
    III. Store: State/Object tree de la aplicacion entera es guardado en el store.
    IV.  View - Solo hace un display de la data que trae el store.

-------------------------------------------------------------------------------------------------------------

22. Cual es la significancia del store en Redux?:

El store es un objeto de Javascript que puede soportar todo el estado de la aplicacion y provee unos cuantos 
metodos que ayudan el acceso al state, envio de acciones y registro de listeners. El state entero es guardado
en un solo store, dando como resultado, simplicidad y practicidad. Podemos pasar un Middleware al store para 
que se encargue de procesar la data como tambien mantener un log de varias acciones que cambian el estado del 
store. Todas las acciones retornan un nuevo estado via reducers.

-------------------------------------------------------------------------------------------------------------

23. Que es un Middleware?:

Son Higher Order Functions que nos permiten agregar funcionalidad a los stores de Redux. Un Middleware sirve 
para muchas tareas diferentes, registrar datos, capturar errores, despachar promises, cambiar rutas, etc.
Un Middleware es una funcion, que va a recibir como parametro una version reducida del store, con solamente
los metodos dispatch y getState. Esta funcion debe devolver otra funcion que va a recibir una funcion 
normamlemente llamada next que nos sirve para llamar al siguiente Middleware. Por ultimo, devolvemos una 
nueva funcion que va a recibir la accion que se esta ejecutando. 

-------------------------------------------------------------------------------------------------------------

24. Que es el scope?:

El scope es la accesibilidad a las variables, funciones y objetos en un sector particular del codigo mientras
este corre. Determina la visibilidad de variables y otros recursos en ciertas areas de tu codigo.

-------------------------------------------------------------------------------------------------------------

25. Como es el scope en Javascript?:

En javascript hay dos tipos de scope:

    I.  Global scope.
    II. Local scope.

Las variables definidas dentro de una funcion estan en local scope mientras que las variables definidas fuera
de una funcion estan en el scope global.

-------------------------------------------------------------------------------------------------------------

26. Cuál es la diferencia entre herencia clásica y herencia prototípica?:

Herencia clasica: Las instancias heredan de clases (como un blueprint - una descripcion de la clase), y crean 
                  relaciones de subclase: taxonomias de clase jerarquica. Las instancias son tipicamente 
                  instanciadas via funciones de constructor con la keyword 'new'. La herencia de clases puede 
                  o no puede usar la keyword 'class' de ES6.

Herencia prototipica: Instancias heredan directamente de otros objetos. Las instancias son tipicamente 
                      instanciadas via funciones Factory o 'Object.create()'. Las instancias pueden ser 
                      compuestas para muchos objetos diferentes, permitiendo una facil seleccion de 
                      herencia.

-------------------------------------------------------------------------------------------------------------

27. Cuando es una decision acertada usar herencia clasica?:

Casi nunca. Hay que favorecer composicion de objetos sobre herencia de clases.

-------------------------------------------------------------------------------------------------------------

28. CUando es una decision acertada usar herencia prototipica?:

En situaciones en donde modulos o la programacion funcional no puede dar una solucion obvia o siempre que 
necesites herencia. Por ejemplo, usar el Object.assign() o spread operator.

-------------------------------------------------------------------------------------------------------------

29. Qué son el enlace de datos bidireccional y el flujo de datos unidireccionales y en qué se diferencian?:

El enlace de datos bidireccional significa que los campos de la interfaz de usuario estan vinculados al modelo
de datos dinamicamente, de modo que cuando un campo de la interfaz de usuario cambia, los datos del modelo
cambian con el y viceversa.El flujo de datos unidireccional significa que el modelo es la unica fuente de verdad.
Los flujos de datos unidireccionales son deterministas, mientras que el enlace de datos bidireccionales puede
causar efectos secundarios que son mas dificiles de seguir y comprender.

React es el nuevo ejemplo de flujo de datos unidireccionales.

-------------------------------------------------------------------------------------------------------------

30. Que es programacion asincrona y por que es importante en Javascript?:

La programacion sincrona significa que, salvo los condicionales y las llamadas a funciones, el codigo se ejecuuta
secuencialmente de arriba a abajo, bloqueando tareas de larga ejecucion, como solicitudes de red. Osea, hasta
que no termina una accion, no comienza la siguiente.

La programacion asincrona significa que el motor se ejecuta en un event loop. Cuando se necesita una operacion de
bloqueo, se inicia la solicitud y el codigo continua ejecutandose sin bloquear el resultado. Cuando la respuesta 
esta lista, se dispara una interrupcion, lo que hace que se ejecute un controlador de eventos, donde el flujo de
control continua. De esta manera, un solo hilo del programa puede manejar muchas operaciones simultaneas.

Esto es importante en Javascript porque es un ajuste muy natural para el codigo de interfaz de usuario y muy
beneficioso para el rendimiento en el servidor.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Fuentes:

1. https://codeburst.io/javascript-map-vs-foreach-f38111822c0f

2. https://alligator.io/react/higher-order-components/

3. https://medium.com/@fastphrase/when-to-use-redux-f0aa70b5b1e2 
   https://www.edureka.co/blog/interview-questions/react-interview-questions/

4. https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS

5. DOM: https://es.wikipedia.org/wiki/Document_Object_Model

Virtual DOM: https://www.quora.com/Why-is-Reacts-virtual-DOM-so-much-faster-than-the-real-DOM

6. https://carlosazaustre.es/como-funciona-redux-conceptos-basicos/

7. https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-1-e0b1d0b2142e

8 a 22. https://www.edureka.co/blog/interview-questions/react-interview-questions/

23. https://medium.com/react-redux/middlewares-en-redux-js-88081fcd6c91

24 y 25. https://scotch.io/tutorials/understanding-scope-in-javascript

26 a 30. https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
