# Contexto y decisiones del proyecto

**Actualizado:** 1 de noviembre de 2026  
**Propósito:** dejar un resumen de continuidad para retomar el trabajo desde otra conversación o cuenta. Mantener este documento actualizado cuando cambien decisiones importantes o se complete trabajo relevante.

## Proyecto

Sitio web académico para presentar el trabajo de egreso de Elián Lucas Lin, del Colegio Padre Claret, Córdoba:

> Análisis del uso, diseño industrial y demanda de los resaltadores para jóvenes en su estudio.

El PDF de referencia compartido por el usuario está en `E:\下载11.1\TEFI -Lin -AUDDRJE.pdf`.

El título se comprobó directamente contra la portada del PDF: **Análisis del uso, diseño industrial y demanda de los resaltadores para jóvenes en su estudio**. Mantener ese texto en la presentación formal del trabajo y en los pies; los titulares editoriales de cada sección pueden ser diferentes.

Se incorporó una copia íntegra del informe a `documentos/trabajo-de-egreso-lin.pdf` (1 450 106 bytes). Se verificó que su SHA-256 coincide con el original. Inicio e Investigación tienen enlaces para leerlo en otra pestaña y descargarlo; las siete páginas principales también lo enlazan desde el pie. Al publicar la web se debe incluir la carpeta `documentos/` junto al HTML y los recursos.

### Datos que pueden mostrarse como hallazgos

- Encuesta a 133 estudiantes de 14 a 18 años del Colegio Padre Claret, con 8 preguntas cerradas.
- 80,4 % usa resaltadores al estudiar: 43,6 % habitualmente y 36,8 % ocasionalmente.
- 70,7 % los usa para jerarquizar ideas clave.
- 74,4 % prefiere el cuerpo chato; 63,9 % elige punta biselada.
- 44,4 % prioriza comprar resaltadores en sets.
- Preferencias cromáticas: 38,3 % usa tonos pastel y neón por igual; 36,1 % prefiere solo pastel y 25,6 % neón. No presentar el resultado como si la mayoría eligiera exclusivamente tonos pastel.
- Los porcentajes describen la muestra consultada; no generalizarlos a todos los estudiantes.

## Figma

- Archivo: [Sin título](https://www.figma.com/design/eEXTTp01DQNncHDyNSgQpi/Sin-t%C3%ADtulo?node-id=0-1).
- La página de Figma tiene varios frames de sitio. El inicio que se implementó es **“Inicio · 林 · lin”**, nodo `3:3116`.
- El frame **“Resaltador ideal · 林 · lin”** es otro nodo (`3:3541`), distinto del inicio. También existen frames de investigación para resumen, marco teórico, metodología, resultados, conclusiones y bibliografía.
- La integración de Figma quedó conectada y el archivo fue accesible para leer el diseño. Si se retoma desde otra cuenta, esa cuenta puede necesitar permisos al archivo.
- Se usó el contexto de diseño y la captura del frame `3:3116` como referencia. No usar la captura completa como imagen de fondo; usar las ilustraciones individuales descargadas.

## Decisiones visuales y de implementación

- La portada debe seguir la composición del frame de Figma **Inicio** y mantener el violeta como color principal con marrón como color secundario.
- Paleta base tomada de Figma:
  - Fondo: `#1b171f`
  - Superficie: `#2b232b`
  - Violeta principal: `#8b5cf6`
  - Violeta claro: `#a78bfa`
  - Texto principal: `#f5f0e7`
  - Texto secundario: `#d6c3b8`
  - Marrón del pie: `#352821`
  - Bordes: `#4a3a4f`
- El usuario pidió un tono violeta y marrón, con violeta protagonista y algo de oscuridad; al pedir que se siguiera Figma, se adoptó la paleta oscura exacta del diseño.
- Tipografías: DM Serif Display para titulares e Inter para texto. Se cargan desde Google Fonts y tienen fuentes de sistema como fallback.
- El proyecto es HTML, CSS y JavaScript plano. Mantener los tres archivos separados; no agregar framework ni dependencias sin necesidad.
- La página tiene un ancho máximo de 1440 px y adapta la composición a pantallas pequeñas.
- La navegación principal y el pie comparten enlaces directos a Inicio, Investigación y Resaltador ideal; las secciones de Investigación se recorren desde la subnavegación centrada. El menú móvil se controla en `script.js`.
- El frame implementado es la portada larga de Inicio, con resumen del estudio, pregunta de investigación, cuatro disciplinas, resultados destacados, adelanto del concepto y créditos. No se han implementado como páginas separadas los demás frames de Figma.

## Archivos

- `index.html`: contenido y estructura de la portada.
- `investigacion.html`: página Investigación, con resumen e introducción.
- `desarrollo.html`: página que unifica marco teórico y metodología.
- `marco-teorico.html` y `metodologia.html`: redirigen a `desarrollo.html` para conservar las direcciones previas.
- `style.css`: paleta, tipografía, layout y estilos responsive.
- `script.js`: apertura y cierre del menú móvil.
- Recursos locales usados en la portada:
  - `assets/home-stationery.jpg`: fotografía principal del escritorio y los resaltadores.
  - `assets/highlighter-detail.png`: imagen de adelanto del concepto.
  - `assets/lin-mark-home.svg` y `assets/lin-mark-home-footer.svg`: marca de Figma para encabezado y pie. Los SVG conservan sus dimensiones nativas de 116 × 40 px.

En `assets/` hay recursos descargados de otros frames que no usa `index.html`: `chisel-flat-body.jpg`, `highlighter-concept.jpg`, `highlighters-concept.jpg`, `highlighter-study.png`, `lin-mark.svg` y `lin-mark-footer.svg`. Algunos ya los usa `resaltador-ideal.html`; revisar las referencias del sitio completo antes de borrarlos.

## Estado y pendientes

- La portada del frame **Inicio** ya está implementada y usa recursos locales de Figma.
- También quedaron implementados los frames de **Investigación · Resumen e introducción** (`3:3260`) y **Desarrollo** (marco teórico `8:5` más metodología `8:51`) como `investigacion.html` y `desarrollo.html`.
- Los frames de **Resultados** (`8:97`), **Conclusiones** (`8:143`) y **Bibliografía** (`8:189`) están en `resultados.html`, `conclusiones.html` y `bibliografia.html`.
- La navegación principal es compartida en todas las páginas e incluye los enlaces directos a Inicio, Investigación y Resaltador ideal. Las cinco secciones de Investigación se muestran en una subnavegación centrada inmediatamente debajo del header.
- `investigacion.html` explica el tema y el propósito del trabajo, su enfoque interdisciplinario, la encuesta local y cómo esos hallazgos llevan a la propuesta conceptual.
- Se ampliaron y organizaron `investigacion.html`, `desarrollo.html` y `conclusiones.html`: resumen/contexto y cuatro áreas en Investigación; cuatro ejes teóricos con referencias y ficha metodológica en Desarrollo; hallazgos, interpretación, límites de la muestra y enlace a la propuesta en Conclusiones.
- Las páginas usan transiciones de entrada/salida compatibles con View Transitions y reducen movimiento según la preferencia del sistema.
- La página de Resultados reproduce los porcentajes descritos en el documento y aclara dónde el desglose es parcial; no completa valores faltantes ni presenta asociaciones causales.
- Bibliografía conserva las diez referencias del frame de Figma y enlaza cada título con la URL correspondiente extraída de las anotaciones del PDF.
- El sitio no se ha comprobado mediante una captura del navegador; conviene revisar visualmente desktop y móvil antes de publicar o darlo por terminado.
- El frame **Resaltador ideal** (`3:3541`) ya está implementado como `resaltador-ideal.html`. La navegación de portada, investigación y pie enlaza a esa página.
- La propuesta conceptual refleja cuerpo chato, punta biselada y un set de cuatro tonos pastel; aclara que es una recomendación derivada de la muestra, no un producto comercial ni un prototipo validado.
- A pedido del usuario, `resaltador-ideal.html` se simplificó a una composición breve: imagen principal, tres criterios de diseño, nota de alcance y enlace a resultados.
- Se añadieron fondos fotográficos oscurecidos a los encabezados visuales de Inicio, todas las páginas de Investigación y Resaltador ideal, con recursos locales para mantener contraste y legibilidad.
- En Desarrollo se presenta el marco teórico junto con la metodología y la nota de alcance: la encuesta es una muestra local descriptiva y no demuestra causalidad ni permite generalizar a todos los estudiantes.
- Por pedido del usuario, marco teórico y metodología se reunieron en `desarrollo.html`; las páginas anteriores redirigen a esa página.
- Del PDF se extrajeron las URLs de los diez enlaces de bibliografía desde las anotaciones de enlace. También se recuperó el texto de las páginas iniciales: incluyen la pregunta de investigación, una hipótesis explícita y el objetivo de determinar las características del resaltador ideal y su relación con las decisiones de compra y los hábitos de estudio.
- La generación anterior con Figma quedó bloqueada por falta de créditos. Este bloqueo se resolvió usando la herramienta integrada de generación de imágenes de ChatGPT, sin CLI ni clave de API.
- En la solicitud más reciente el usuario pidió **seis imágenes de producto** para Resaltador ideal. Se generaron seis tomas de una misma familia de cuatro tonos: colección, cuerpo plano, detalle de punta biselada, paleta, escena sobre cuaderno y presentación en set. Son seis imágenes, no seis colores diferentes. Los colores elegidos para visualizar el concepto son lavanda, salvia, durazno y amarillo suave.
- Los JPG optimizados se guardan en `assets/ideal-01-coleccion.jpg` a `assets/ideal-06-set.jpg`; los originales PNG están en `assets/generated/`. Todos los prompts finales y el método están documentados en `assets/GENERACION_IMAGENES.md`.
- `resaltador-ideal.html` presenta una galería de seis imágenes con ampliación mediante un diálogo accesible. Inicio usa las nuevas vistas de estudio y colección; todas las páginas de Investigación tienen fondos actualizados con esta misma familia visual. Los recursos anteriores se conservan en disco.
- La publicación/despliegue no se ha realizado.
- En `investigacion.html` se añadieron, debajo del resumen y la introducción, la pregunta de investigación, la hipótesis expresada en el informe, el objetivo general, el enfoque y alcance del estudio, y una ficha con autor, tutora, institución y fecha.
- Se simplificaron los encabezados de las cinco páginas de Investigación: conservan el nombre de sección y el título de página; la pregunta, autoría y descripción común dejaron de repetirse allí. Los créditos y el planteamiento se concentran en la introducción.
- Se reorganizó la portada en bloques visuales para presentar el tema y la pregunta, las cuatro disciplinas, una selección de resultados y la propuesta conceptual. Se añadieron accesos directos a pregunta/hipótesis/objetivo, Desarrollo, Resultados y Conclusiones.
- Se revisaron los datos de portada contra el informe: muestra de 133 estudiantes de 14 a 18 años, ocho preguntas cerradas, porcentajes de uso/jerarquización/cuerpo chato y preferencia cromática combinada (38,3 % pastel y neón por igual). La nota de alcance mantiene que los porcentajes describen solo a la muestra consultada.
- La numeración visible de las páginas de Investigación se unificó en secuencia: 01 Resumen e introducción, 02 Desarrollo, 03 Resultados, 04 Conclusiones y 05 Bibliografía.
- En el planteamiento se incorporó una tarjeta de “Aspectos observados” para completar la cuadrícula junto a enfoque y alcance. En Conclusiones se explica que el PDF considera confirmada la hipótesis pedagógica y cognitiva; el texto separa ese respaldo descriptivo de cualquier afirmación causal o generalizable.

## Revisión de las propuestas de producto

- El usuario aclaró que las fotos deben funcionar como propuestas de resaltadores y pidió rehacerlas con aspecto más realista y mostrando los criterios de la conclusión. Se reemplazaron las seis tomas de detalle por seis alternativas completas: clásica plana, bordes suaves, compacta, agarre definido, base amplia y paleta combinada.
- Todas muestran cuerpo aplanado, una punta biselada visible, tonos pastel, presentación en set y selección de conceptos sobre apuntes. La última combina cuatro pastel con dos neón; esa combinación refleja las preferencias mixtas de la muestra. La forma exacta y los empaques son decisiones de propuesta, sin validación física.
- Nuevos archivos: `assets/propuesta-01-clasica.jpg`, `assets/propuesta-02-suave.jpg`, `assets/propuesta-03-compacta.jpg`, `assets/propuesta-04-agarre.jpg`, `assets/propuesta-05-estable.jpg` y `assets/propuesta-06-mixta.jpg`. Originales PNG en `assets/generated/`; prompts y criterios en `assets/PROPUESTAS_FOTORREALISTAS.md`.
- La galería y la imagen principal de Resaltador ideal, y el adelanto de propuesta en Inicio, usan esta nueva versión. Se añadieron criterios de compra en set, jerarquización y contraste a la ficha del producto. Las seis imágenes anteriores siguen disponibles en disco y en fondos decorativos del sitio.

## Preferencias de colaboración

- Preparación de GitHub: se inicializó el repositorio Git local en `main`, con `README.md`, `.gitignore` y `.gitattributes`. La web y el PDF se incluyen; `assets/generated/`, ajustes del editor, temporales y archivos de entorno quedan excluidos, conservándose en disco.
- El usuario proporcionó el repositorio `https://github.com/elyang-prog/tefi.lin.auddrje.git`. Se comprobó que está vacío y accesible mediante Git. Se prepara la primera subida desde `main` usando Git; no hace falta la integración de ChatGPT para esa vía.

- Revisión del título: los pies se unificaron con el título exacto de portada. Inicio tenía una descripción genérica; ahora presenta el título completo en el resumen y el pie. Se evitó duplicar el título largo en la nota inferior y se incorporó como título para compartir en los metadatos de las siete páginas principales.
- El PDF está disponible dentro del proyecto y enlazado para lectura/descarga. Esta incorporación no supone que la web se haya publicado en Internet.

- Revisión más reciente de Inicio: encabezado visual ampliado (540 px mínimo en escritorio y 410 px en móvil), conservando la navegación común, la fotografía de fondo y los datos del estudio debajo del hero.
- Se generó una imagen vertical exclusiva para la franja de propuesta: `assets/inicio-propuesta-franja.jpg`, original en `assets/generated/inicio-propuesta-franja.png`, con el mismo resaltador lin de cuerpo chato y punta biselada. Prompt y método en `assets/INICIO_FRANJA.md`.
- La propuesta y la idea central ahora comparten una única franja: foto a un lado, información del producto, síntesis de uso y enlaces a la propuesta y las conclusiones. Se mantienen ambas ideas, evitando repetir el porcentaje de jerarquización ya mostrado en Resultados destacados.
- Las cuatro áreas del trabajo se integraron como un recorrido breve dentro del resumen de investigación, en lugar de repetir tarjetas con número, lema y descripción. Se eliminó la repetición del tamaño de muestra en ese párrafo; los datos se conservan en la ficha del estudio.

- Última petición de Inicio: la navegación vuelve al mismo esquema de Investigación y Resaltador ideal (logo a la izquierda, enlaces centrados, edición 2026 a la derecha; mismo menú móvil). Los datos de participantes, edades y encuesta salen del hero y se integran en el bloque de resumen de la investigación.
- Se amplió el contenido de las tarjetas “La propuesta” e “Idea central”: criterios del resaltador, relación con las preferencias relevadas, venta individual/set y empaque; selección de conceptos, códigos de color y vínculo entre comodidad y presupuesto. La idea central incorpora el dato de 70,7 % sobre jerarquización y repaso, conservando los enlaces a la propuesta y las conclusiones.

- Último ajuste visual: el usuario pidió recuperar el logo anterior. Se restauró la marca gráfica **lin · 林** en la navegación de todas las páginas; se mantiene “TEFI / Investigación” en el rótulo de las páginas académicas.
- Inicio vuelve a tener un fondo fotográfico, con texto y datos del estudio integrados en una sola presentación. Se retiraron la foto flotante y la franja de datos separada; el bloque de resumen debajo se hizo más breve y compacto. La navegación tiene un fondo violeta/marrón discreto.
- Las fotografías visibles se distribuyeron sin repetirlas entre páginas: Inicio usa `home-stationery.jpg` y `ideal-03-punta.jpg`; Investigación `propuesta-01-clasica.jpg`; Desarrollo `propuesta-04-agarre.jpg`; Resultados `ideal-04-paleta.jpg`; Conclusiones `ideal-06-set.jpg`; Bibliografía `propuesta-03-compacta.jpg`; Resaltador ideal conserva `resaltador-fondo-estudio.jpg` y sus tres vistas `resaltador-01-producto-v2.jpg`, `resaltador-02-detalle-v2.jpg`, `resaltador-03-set-v2.jpg`. El logo se repite como identidad de navegación.

- Simplificación vigente del Inicio: encabezado TEFI con los tres enlaces principales y menor altura. La presentación conserva una sola fotografía y elimina el fondo fotográfico duplicado, la barra bajo el título, el sello de imagen y la firma repetida. El título se acortó a “Resaltar para estudiar.”, con una descripción breve, un botón principal y un enlace secundario. Se redujo la altura de la foto y se ajustó la composición a móvil.

- Cambios actuales de texto y composición: el usuario prefiere “propuesta” o “idea” en lugar de “portafolio”. Las etiquetas visibles de Resaltador ideal ahora dicen “Propuesta / Diseño industrial” y “Propuesta de producto”; se conserva el producto como cierre de esa página.
- Los bloques 02 y 03 de Inicio se unificaron en una franja compacta de dos tarjetas: adelanto del resaltador ideal (con imagen pequeña y enlace) e idea central (texto breve y enlace a Conclusiones). Se retiró la presentación anterior con imagen de 518 px de alto y una cita extensa debajo.
- En las cinco páginas de Investigación (resumen/introducción, desarrollo, resultados, conclusiones, bibliografía), el encabezado principal y el rótulo del masthead usan **TEFI**. La marca del inicio, la del producto y los créditos del pie conservan su identidad anterior.
- Se redujo el espacio vertical sobrante de Resumen e introducción: menor separación entre artículos, antes del planteamiento y después de la ficha del trabajo, manteniendo el contenido académico.

- Cambio vigente: el usuario rechazó el nombre “TRAZO”. Se eliminó de las páginas públicas y de la impresión visible en las tres imágenes; se usa **Resaltador ideal** como título descriptivo y se conserva la identidad lin. No inventar otro nombre sin pedido del usuario.
- Los nombres de colores se simplificaron en las páginas públicas a **violeta, verde, naranja y amarillo**, en tonos pastel. Evitar “lavanda”, “salvia” y “durazno” en textos y alternativas accesibles.
- El orden de Resaltador ideal es ahora portada → investigación → diseño → presentación de producto. El bloque del producto con tres perspectivas es el último contenido antes del pie. La navegación y numeración se adaptaron a ese recorrido.
- Se agregó un fondo fotográfico a la portada con escritorio, cuaderno, boceto y resaltadores. Archivos vigentes: `assets/resaltador-01-producto-v2.jpg`, `resaltador-02-detalle-v2.jpg`, `resaltador-03-set-v2.jpg` y `resaltador-fondo-estudio.jpg`. Originales en `assets/generated/`; prompts en `assets/RESALTADOR_REVISION.md`. Inicio usa la nueva imagen del set sin el nombre rechazado.

- Versión vigente de Resaltador ideal: el usuario pidió reducir seis perspectivas a tres y presentar un único producto orientado al comercio como un portafolio de diseño industrial. Se creó el concepto **lin · TRAZO**: un resaltador plano de bordes redondeados y punta biselada, con identidad de marca y set de cuatro tonos pastel.
- La página muestra exactamente tres imágenes ampliables del mismo producto: vista general, detalle de punta/trazo y presentación comercial con empaque. La cabecera incluye ficha de proyecto (autor, categoría, etapa y desarrollo) y la colección incorpora una ficha breve de formato, punta, paleta y comercialización planteada por unidad/set. Se eliminaron las seis alternativas de la galería visible.
- Imágenes vigentes: `assets/trazo-01-producto.jpg`, `assets/trazo-02-detalle.jpg`, `assets/trazo-03-set.jpg`; originales en `assets/generated/`. Prompts y decisiones en `assets/TRAZO_PORTAFOLIO.md`. Inicio muestra el nuevo set. Se conserva el historial anterior en disco.
- TRAZO se presenta como concepto comercial, con fabricación, costos y pruebas de uso pendientes de desarrollo. No hay tienda, precio ni stock ficticios; el sitio funciona como portafolio académico de diseño de producto.

- Rediseño de Resaltador ideal: la página se reorganizó en presentación breve con acceso a la colección, navegación interna y tres secciones (criterios, seis propuestas y fundamento). Los seis criterios repetidos se agruparon en tres ejes (forma, trazo y color); la galería ahora usa dos columnas para dar más espacio a las fotos y cada descripción explica la diferencia de su alternativa.
- La sección final reúne el origen del estudio, los datos de compra en sets y jerarquización, y enlaces a Conclusiones y Resultados. Se mantienen la ampliación de imágenes, la adaptación a móvil, los seis archivos de producto y la preferencia de no mostrar menciones a IA en las páginas públicas.

- Última revisión de Resaltador ideal: el usuario pidió quitar las menciones a IA de las páginas públicas y usar el bloque antes llamado “Propuesta, no producto” para mostrar productos. Ese bloque se integró en “Propuestas de producto”, con seis imágenes nuevas de catálogo sobre fondo neutro y sin escenas de escritorio. Cada alternativa muestra set, cuerpo chato, bordes suaves, punta biselada y muestras de trazo. La sexta incorpora colores pastel y neón.
- La versión vigente de la galería usa `assets/producto-01-plano.jpg`, `producto-02-redondeado.jpg`, `producto-03-compacto.jpg`, `producto-04-agarre.jpg`, `producto-05-base.jpg` y `producto-06-combinado.jpg`. Se actualizaron la imagen principal y el adelanto en Inicio. Los originales están en `assets/generated/` y el registro de generación en `assets/PRODUCTOS_PROPUESTA.md`. Las versiones anteriores se conservan en disco.

- Conversar en español.
- El usuario quiere que el trabajo hecho y las decisiones relevantes se sigan guardando en este archivo para poder transferir contexto a otra conversación o cuenta.
