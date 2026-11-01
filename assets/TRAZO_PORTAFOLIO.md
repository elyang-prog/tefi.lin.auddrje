# TRAZO · Proyecto de diseño industrial

Versión vigente: un único modelo de resaltador ideal, con identidad propuesta lin · TRAZO y tres perspectivas. Se plantea como concepto comercial de venta individual o en set de cuatro tonos; no se inventaron precios, stock, costos, validación física ni certificaciones.

Método: herramienta integrada de generación de imágenes, sin CLI ni clave de API. Las vistas de detalle y empaque usan la primera imagen como referencia del mismo producto. Las páginas públicas conservan la preferencia del usuario de no incluir menciones al método de generación.

## Archivos

- `assets/trazo-01-producto.jpg`; original: `assets/generated/trazo-01-producto.png`.
- `assets/trazo-02-detalle.jpg`; original: `assets/generated/trazo-02-detalle.png`.
- `assets/trazo-03-set.jpg`; original: `assets/generated/trazo-03-set.png`.

## Criterios

Cuerpo chato con bordes redondeados, cuello de agarre definido, punta biselada, paleta lavanda/salvia/durazno/amarillo suave e identidad aplicada al producto y al empaque. La paleta de cuatro tonos es una decisión de diseño; no se presenta como preferencia exclusiva de la mayoría de la encuesta. La fabricación, costos y pruebas de uso quedan como desarrollos posteriores.

## Prompts finales

### trazo-01-producto

```text
Use case: product-mockup. Asset: hero product photograph for an industrial design portfolio and proposed commercial stationery line. Product name TRAZO, existing site brand lin. Create ONE refined realistic highlighter pen in pastel lavender, with a wide FLAT rectangular barrel, softly rounded edges, a subtly narrowed comfortable neck, matching removable flattened cap and a real purple CHISEL WEDGE felt tip. The broad flat underside is visible resting on the surface. Realistic manufactured proportions about 10.5cm long, 2.5cm wide, 1.1cm thick, injection-molded satin polypropylene with fine micrograin and precise cap seams. A small simple dark violet printed 'lin' and 'TRAZO' wordmark on the broad barrel face, legible tasteful minimal typography. Pen uncapped in a clean three-quarter view, entire pen and its ONE detached matching cap fully visible, no duplicate pens or other accessories. Warm off-white seamless background with physically believable contact shadows, premium commercial product photography, soft directional light, neutral warm color grading with the lavender product as focal point. Landscape 3:2, product centered with safe margins for complete silhouette. No infographic, no marketing copy, no price, no certifications, no watermark. This photograph defines the exact consistent product design for later detail and packaging views.
```

### trazo-02-detalle

```text
Use case: product-mockup. Input image 1 is the EXACT industrial design, proportions, lavender color, satin polymer finish and lin / TRAZO branding reference for a proposed commercial highlighter. Generate ONE new realistic landscape 3:2 PRODUCT DETAIL photograph of the SAME pen, not a different variant. Close three-quarter macro on the real purple chisel wedge felt nib and subtly narrowed neck, enough of the broad flat lavender barrel visible to recognize the same object; the same detached flattened cap visible nearby. The pen is lying on ivory paper showing one broad translucent lavender stroke and one separate fine underline; dark short parallel ink lines beneath part of the broad stroke remain visible. Camera lens macro detail, real felt fibers, tiny plastic texture, realistic paper grain, warm off-white studio environment and consistent soft lighting. Keep shape, satin texture, small dark violet lin and TRAZO wordmark, cap design IDENTICAL to reference. No hands, no room, no other pens, no feature labels, no extra logos, no watermark. The focus is how this single product's chisel tip supports two line widths.
```

### trazo-03-set

```text
Use case: product-mockup. Input image 1 is the EXACT industrial design, proportions, cap, finish and lin / TRAZO branding reference. Generate ONE new realistic landscape 3:2 commercial PRODUCT PACKAGING photograph for the SAME highlighter line named TRAZO by lin. Four identical highlighter units in exactly four colors: lavender, sage green, pale peach, butter yellow. Preserve same broad FLAT rectangular barrel, rounded corners, subtly narrowed neck, matching flattened removable cap, true wedge felt tip. A real folded warm-white cardboard retail tray with removable sleeve, clean premium yet feasible small stationery packaging, dark violet minimal printed text ONLY: 'lin', 'TRAZO', '4 tonos'. THREE capped units sage peach butter yellow neatly in open tray, the FOURTH lavender unit uncapped immediately in front with its matching detached cap and visible purple chisel wedge nib. Exactly four pens total. All broad barrel faces carry subtle lin and TRAZO print consistent with the reference. Show entire set and sleeve completely, on warm off-white seamless background, high-end natural commercial photography with real cardboard texture, fine polymer grain and contact shadows. No notebooks, people, plants, cups, watermark, extra labels, environmental claims, certification, prices or product features not requested. Same product design as reference; this is its proposed unit-and-set commercial presentation.
```

