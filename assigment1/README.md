# Assigment 1

This project was developed by Esteban Rodas.

Topics covered are: Scrum, Git, HTML and CSS, JavaScript, and React.

## Color Selector
![image](https://user-images.githubusercontent.com/85135244/147958101-7ce30723-376e-4049-a3d0-a208ce6bdb85.png)

Proyecto en React que contenga un grid y un selector de colores, cada que se le haga click a una cuadrado, este debe de cambiar su <br>
background color seleccionado en el selector.

![image](https://user-images.githubusercontent.com/85135244/147958071-2f1faf28-4f55-41d9-946b-76c7570b182e.png)

## Preguntas

### 1.-¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
Las ceremonias de un Sprint son:
	
1)Sprint Planning: Tiene lugar al comienzo del Sprint. Se asegura que cada 
miembro este preparado y que en cada sprint se hagan las cosas correctamente.

2)Daily Scrum: Debe hacerse almenos una vez por día, no debe superar los 15 minutos.
El equipo se reune a comunicar sobre el progreso de cada miembro.

3)Sprint Review: Es el momento donde se muestra el trabajo completado durante el Sprint
a las partes interesadas, de modo que pueden ver como van las cosas y dedicarse a 
inspeccionar o adaptar el producto.

4)Sprint Retrospective: Consiste en obtener retroalimentacion rapida con el objetivo 
de mejorar la cultura y desarrollo del producto. Se realiza al final de cada Sprint.

### 2.- ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
Wireframe es un prototipo o boceto donde se representa visualmente de forma muy
sencilla y genérica la estructura de una página web (idea), con el objetivo de definir
el contenido y la posición que tendrá el proyecto. 
Herramientas para realizar wireframes: Figma y AxureRP.

### 3.- Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

* Var: no necesita ser inicializado, se puede redefinir y redeclarar y tiene un scope global. <br>
* Let: no tiene que ser inciializado, se puede redefinir pero no redeclarar, y tiene un block scope.<br>
* Const: Tiene que ser inicializado cuando se declara, no se puede redefinir ni declarar y tiene un block scope.

Ej: En caso de querer utilizar una variable más alla del bloque donde fue declarada:
```javascript
{
  var varDeclaracion = "soy var en Block Scoped";
  console.log(varDeclaracion); // soy var en Block Scoped
}
console.log(varDeclaracion); // soy var en Block Scoped

{
  let letDeclaracion = "soy let en Block scoped";
  console.log(letDeclaracion); // soy let en Block scoped
}
console.log(letDeclaracion); // Uncaught ReferenceError: letDeclaracion is not defined

{
  const constDeclaracion = "soy const en Block scoped";
  console.log(constDeclaracion); // soy const en Block scoped
}
console.log(constDeclaracion); // Uncaught ReferenceError: constDeclaracion is not defined
```
Seria necesario utilizar var, puesto que su scope le permite ser usada fuera del bloque.

### 4.- ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
Los tres comandos son:
1) git branch rama-1 (crea la rama)
2) git checkout rama-1 (entrar a la rama creada)
3) git checkout -b rama-1 (crea y entra a la rama)

### 5.- Explicar la diferencia entre git merge y git rebase.
* git-rebase: Genera una serie de commits secuencialmente, de modo que puedan aplicarse 
                directamente sobre la cabeza del nodo. <br>
* git-merge: Une dos o más historiales de desarrollo.

### 6.- ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
* Pull Request:Es una peticion que el propetario de un fork de un repositorio hace al  propietario 
                 del repositorio original para que este último incorpore los commits que están en el fork. <br>
* Git Pull:Se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al 
             instante el repositorio local para reflejar ese contenido.

### 7.- ¿Qué es el Virtual DOM?
El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario 
entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre 
un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más 
eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

### 8.- Dado el siguiente [codePen](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100), el cual solo tiene un HTML, por medio de css llegar a esta respuesta. [Imagen](https://github.com/makeitrealcamp/assesment-1-programa-top/blob/main/assets/services-section.gif) (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
<strong>Click [here](https://codepen.io/Dravernuss/pen/dyVRJpR) to see my solution.<strong>
  
```css
CSS:

.c-section {
  max-width: 800px;
  position: relative;
  margin: auto;
}

.c-section__title{
  background-color: black;
  color: white;
  text-align: center;
  font-family: Courier New;
  line-height: 70px;
  margin: -10px;
  border-top: 10px solid grey;
}

h3{
    margin-left: 15%;
    margin-top:30px;
    font-style:bold;
  }

.c-services{
  display:flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 0px;
  padding: 1px;
  font-family:cursive;
}

.c-services__item{
  width:49.5%;
  background-color:#E3E3E3;
  margin-top: 20px;
}

.c-services__item:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

p{
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
```
