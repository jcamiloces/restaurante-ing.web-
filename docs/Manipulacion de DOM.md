Manipulación del DOM

1. Definición del DOM en el Proyecto

    El DOM (Document Object Model) es la interfaz de programación que permite que JavaScript interactúe con el HTML de nuestra página de restaurante. En este proyecto, se utiliza para transformar una estructura estática en una interfaz digital funcional que reacciona a las acciones del cliente en tiempo real.

2. Técnicas de Manipulación Aplicadas

    A. Selección de elementos: Para controlar los componentes del restaurante (botones de menú, lista de pedidos y total), utilizamos métodos de selección para "atrapar" los elementos del HTML:

   - document.querySelectorAll('.btn-add'): Captura todos los botones de los platos para asignarles funcionalidad.

   - document.getElementById('total-pago'): Selecciona el campo específico donde se muestra el precio acumulado.

   B. Gestión de Eventos (Event Listeners): El sistema utiliza "escuchadores de eventos" para detectar la interacción del usuario. Esto es clave para cumplir con el objetivo de rapidez y eficacia:

   - Evento click: Cada vez que un usuario presiona "Agregar al Carrito", el sistema dispara una función que procesa los datos del producto (nombre y precio) sin necesidad de recargar la página.
   
   C. Modificación Dinámica del Árbol de Nodos: La manipulación más visible ocurre cuando el cliente construye su pedido:
   - Creación de Nodos (createElement): Al hacer clic, JavaScript crea un nuevo elemento de lista que no existía originalmente en el HTML.
   - Inserción de Contenido (innerHTML / textContent): Se inserta el nombre del plato y su precio dentro del nuevo nodo.
   - Inyección en el DOM (appendChild): El nuevo elemento se añade a la lista visual de la orden, permitiendo que el usuario vea su pedido actualizado instantáneamente.

3. Impacto en la Experiencia del Usuario (UX)

   
 La manipulación del DOM permite cumplir con las metas establecidas en la planeación:


  - Reducción de errores: Al automatizar el cálculo del total mediante lógica de programación, se eliminan las equivocaciones manuales.
  - Interactividad: El botón de "Confirmar Pedido" solo aparece o se habilita cuando hay elementos en el carrito, guiando al usuario de forma intuitiva.
  - Simulación Realista: Provee la sensación de una aplicación profesional moderna, esencial para el perfil de los grupos de interés (estudiantes y docentes).
