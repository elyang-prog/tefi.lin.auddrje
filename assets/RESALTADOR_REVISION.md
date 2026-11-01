# Revisión del resaltador ideal

Se retiró el nombre comercial anterior a pedido del usuario. La página usa el título descriptivo “Resaltador ideal”; las tres fotos conservan únicamente la identidad lin. Los colores visibles se nombran violeta, verde, naranja y amarillo, todos en tonos pastel.

Orden vigente: presentación con fondo fotográfico → investigación → decisiones de diseño → producto y set comercial como último bloque. La galería conserva tres vistas ampliables.

Herramienta: generación de imágenes integrada, usada para editar las tres fotografías y crear el fondo. Sin CLI ni clave de API. Las menciones al método se conservan solo en esta documentación interna.

## Archivos

- `assets/resaltador-01-producto-v2.jpg`; original: `assets/generated/resaltador-01-producto-v2.png`.
- `assets/resaltador-02-detalle-v2.jpg`; original: `assets/generated/resaltador-02-detalle-v2.png`.
- `assets/resaltador-03-set-v2.jpg`; original: `assets/generated/resaltador-03-set-v2.png`.
- `assets/resaltador-fondo-estudio.jpg`; original: `assets/generated/resaltador-fondo-estudio.png`.

## Prompts finales

### resaltador-01-producto-v2

Referencia de edición: `E:\TEFI\assets\trazo-01-producto.jpg`.

```text
Use case: precise-object-edit. Edit this exact product photograph. Remove ONLY the printed word 'TRAZO' from the highlighter barrel, restoring the same continuous satin light purple plastic underneath. Keep the small 'lin' wordmark intact. Preserve every other detail exactly: same single flat highlighter body, proportions, purple chisel felt nib, detached matching cap, camera angle, composition, lighting, shadows, background, photographic texture, colors and image dimensions. Do not replace the removed word with a different product name. No additional text or elements.
```

### resaltador-02-detalle-v2

Referencia de edición: `E:\TEFI\assets\trazo-02-detalle.jpg`.

```text
Use case: precise-object-edit. Edit this exact macro photograph. Remove ONLY the printed word 'TRAZO' from the purple highlighter barrel and restore uninterrupted matching satin purple plastic. Keep the small 'lin' wordmark. Preserve the exact same body, grip, genuine chisel wedge felt nib, detached cap, broad and fine purple strokes, black ink lines visible through the broad stroke, paper texture, framing, lighting, shadows, colors and image dimensions. No replacement name and no new elements.
```

### resaltador-03-set-v2

Referencia de edición: `E:\TEFI\assets\trazo-03-set.jpg`.

```text
Use case: precise-object-edit. Edit this exact product packaging photograph. Remove the printed word 'TRAZO' EVERYWHERE it appears: on the packaging sleeve at upper center and on every highlighter barrel. Restore matching blank cardboard or matching satin colored plastic in these small text areas. Keep ALL 'lin' wordmarks and keep '4 tonos' exactly. Preserve the entire physical arrangement, all four flat pens, same colors (light purple, pale green, pale orange, pale yellow), same chisel nib and cap, sleeve illustration of four colored pens, folded carton geometry, photographic lighting, off-white background, shadows, composition, textures and dimensions. Do not introduce a replacement product name. Do not change anything except removing TRAZO.
```

### resaltador-fondo-estudio

```text
Use case: photorealistic-natural. Asset: wide photographic background for an industrial design webpage about an ideal study highlighter. Landscape wide editorial overhead photograph of a warm brown wooden study and design desk. On the RIGHT half, an open ivory-paper notebook with a simple graphite outline sketch of a FLAT rectangular highlighter with softly rounded edges and a chisel tip; nearby actual four unbranded flat highlighters in light purple, pale green, pale orange and pale yellow, one uncapped with matching detached cap. A few broad translucent pastel strokes and fine underlines on the notebook suggest selective highlighting. No readable handwriting or text. A plain purple folder corner subtly ties into the website color palette. Keep the LEFT half mostly uncluttered dark warm brown desk texture with soft natural shadows, usable for a light-colored headline overlay; products and notebook primarily on right. Real natural window light, authentic wood and paper grain, believable stationery scale, calm and thoughtful editorial photography. No labels, no logos, no branding, no watermark, no infographic.
```

