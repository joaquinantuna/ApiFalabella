# ApiFalabella
Api para entrevista Falabella Seguros

Repositorio docker
https://hub.docker.com/r/joaquinantuna/node-apifalabella

Documentación Postman
https://documenter.getpostman.com/view/18149590/UVByKAuM

API para la gestión de los diversos seguros de la empresa Falabella Seguros. Se requiere nombre del seguro ("name"), valor de sellIn ("sellIn") que indica la cantidad de días que se tienen para vender ese producto y el precio ("price") que indica el costo del producto


**GET Lista seguros vendidos** localhost:3050/vendidos

Servicio que entrega una lista de los seguros vendidos en formato JSON.

La aplicación parte con con 11 seguros cargados en la base de datos, 9 correspondientes a los que se señalan en las instrucciones y que cuentan con reglas particulares y 2 como ejemplo de nuevos seguros a futuro y que solo comparten las reglas globales pedidas en el requerimiento

**POST Agregar seguro** localhost:3050/agregar

Servicio para agregar nuevos seguros a la lista de vendidos. El formato debe ser JSON y los valores a ingresar son "name", "sellIn" y "price" como el siguiente ejemplo. El valor de "id" se aplica automáticamente y es autoincrementable.

**GET Evaluar seguros en días** localhost:3050/evaluateProducts/3

Servicio para evaluar los seguros vendidos en un tramo de tiempo. Se requiere ingresar el numero de días a evaluar tomando el cuenta el día de inicio como día "0". Así si se desean evaluar 3 días se retornará por consola el comportamiento de los días 0, 1 y 2.

Reglas globales

1 Todos los productos tienen un valor de sellIn, que indica la cantidad de días que tenemos para vender ese producto. 2 Todos los productos tienen un valor price que indica el costo del producto. 3 Al final del día, el sistema debe disminuir los valores de price y sellIn para cada producto. 4 Una vez que la fecha de venta ha pasado, sellIn < 0 , los precios de cada producto, se degradan el doble de rápido. 5 El precio de un producto, nunca es negativo. 6 El precio de un producto nunca supera los 100.

Reglas específicas

7 El producto "Mega cobertura" tiene un precio fijo de 180. 8 El producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio. 9 El producto "Super avance" disminuye su precio el doble de rápido que un producto normal. 10 El producto "Full cobertura" incrementa su precio a medida que pasa el tiempo. 11 El producto "Full cobertura Super duper", tal como el "Full Cobertura", incrementa su precio a medida que se acerca su fecha de vencimiento: El precio se incrementa en 2 cuando quedan 10 días o menos y se incrementa en 3, cuando quedan 5 días o menos. El precio disminuye a 0 cuando se vence el tiempo de venta.

Un Ejemplo de la salida por consola para 3 días es el siguiente:

-----------0-----------

nombre , sellIn , price

Cobertura , 10 , 20

Full cobertura , 2 , 0

Full cobertura super duper , 15 , 20

Mega cobertura , 1 , 180

Mega cobertura , 1 , 180

Super avance , 3 , 6

Baja cobertura , 5 , 7

Full cobertura super duper , 10 , 49

Full cobertura super duper , 5 , 49

Otro seguro , 2 , 100 No existen reglas especiales para este seguro

Otro seguro , 1 , 74 No existen reglas especiales para este seguro

-----------1-----------

nombre , sellIn , price

Cobertura , 9 , 19

Full cobertura , 1 , 1

Full cobertura super duper , 14 , 21

Mega cobertura , 1 , 180

Mega cobertura , 1 , 180

Super avance , 2 , 4

Baja cobertura , 4 , 6

Full cobertura super duper , 9 , 51

Full cobertura super duper , 4 , 52

Otro seguro , 1 , 100 No existen reglas especiales para este seguro

Otro seguro , 0 , 73 No existen reglas especiales para este seguro

-----------2-----------

nombre , sellIn , price

Cobertura , 8 , 18

Full cobertura , 0 , 2

Full cobertura super duper , 13 , 22

Mega cobertura , 1 , 180

Mega cobertura , 1 , 180

Super avance , 1 , 2

Baja cobertura , 3 , 5

Full cobertura super duper , 8 , 53

Full cobertura super duper , 3 , 55

Otro seguro , 0 , 100 No existen reglas especiales para este seguro

Otro seguro , -1 , 71 No existen reglas especiales para este seguro
