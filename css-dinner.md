# CSS DINNER - ESTEBAN RODAS
![image](https://user-images.githubusercontent.com/85135244/141043348-bd183ba0-bbcf-4a83-9115-d635c242707b.png)

RESPUESTAS:

1.- plate

2.- bento

3.- #fancy

4.- plate apple

5.- #fancy pickle

6.- .small

7.- orange.small

8.- bento orange.small

9.- bento, plate

10.- *

11.- plate *

12.- plate + apple

13.- bento ~ pickle

14.- plate > apple

15.- orange:first-child

16.- plate apple:only-child, plate pickle:only-child

17.- plate apple:last-child, .small:last-child

18.- plate:nth-child(3)

19.- bento:nth-last-child(3)

20.- apple:first-of-type

21.- plate:nth-of-type(even)

22.- plate:nth-of-type(2n+3)

23.- plate apple:only-of-type

24.- apple:last-of-type, orange:last-of-type

25.- bento:empty

26.- apple:not(.small)

27.- [for]

28.- plate[for]

29.- bento[for="Vitaly"]

30.- plate, bento[for^="Sa"]

31.- bento, plate[for$="ato"]

32.- bento[for*="obb"]


Existen 3 tipos de selectores, desde menor a mayor peso.

1.- Type selectors and pseudo-elements

2.- Class selectors, attributes selectors and pseudo-classes

3.- ID selectors

NOTA: El selector universal (*), los combinadores (+, >, ~, ' ', || (en-US)) y la pseudo-clase de negación (:not()) no tienen efecto sobre la especificidad.

La especificidad en CSS es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS 
son más relevantes para un elemento y, por lo tanto, serán aplicados. La especificidad está basada en las reglas de 
coincidencia que están compuestas por diferentes tipos de selectores CSS.

¿Cómo se calcula?
La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número
correspondiente de cada tipo de selector. Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento 
la última declaración encontrada en el CSS. La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones.
Se priorizara al que tenga un tipo de selector con mayor peso.
