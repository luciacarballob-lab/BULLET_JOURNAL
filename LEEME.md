# Bujo · v0.4.2

## v0.4.2
- Patrones explicados en lenguaje sencillo: «Duermes 7 h o más → tu energía sube», con la comparación de los dos grupos de días y cuántos días hay detrás. Sin coeficientes ni ratios.

## v0.4.1
- Estadísticas: siempre aparece una gráfica por cada tracker activo, aunque todavía no tenga datos.

## v0.4.0
- Análisis → Estadísticas: gráfico para cada tracker (sueño, mood, estrés, energía, pasos, peso, comidas, digestivo, deposiciones, pastilla, consumo, agua, hábitos, suplementos, sexo y trackers propios).
- Constancia: % de días cumplidos con racha actual y mejor racha; tendencia vs periodo anterior.
- Semana y mes se ven por día, año por mes y rangos largos por semana o mes.
- Gráfico de líneas por defecto; cambia a barras con el botón de arriba (se recuerda).

## v0.3.1
- Arreglado: los selectores de hora y fecha se cerraban al parar la rueda. Ahora se guarda al pulsar fuera o cerrar el selector.

## v0.3.0
- Comidas: toca un plato (p. ej. «pizza») para apuntar sus ingredientes. Puedes guardarlo como receta y se rellena sola la próxima vez.
- Los ingredientes y sus categorías cuentan en Patrones y salen en el CSV.
- 41 categorías de alimentos en 4 grupos: 14 alérgenos UE, FODMAP (fructanos, GOS, lactosa, fructosa, sorbitol, manitol), irritantes digestivos y tipo de alimento.
- Al crear un alimento, la app sugiere sus categorías (≈ 200 alimentos comunes). Editables en Ajustes → Alimentos y categorías.
- **Datos:** esquema v3. Se añaden las categorías nuevas, se conservan las tuyas y solo se sugieren categorías a alimentos que no tenían ninguna. Exporta un backup antes.

## v0.2.6
- Colecciones: atajos de plazo (en 1 semana, 2 semanas, 1 mes, 3 meses, 6 meses, 1 año) que rellenan la fecha tope.

## v0.2.5
- Lista de deseos: precio (€) y enlace de compra en cada producto. La cabecera suma el total pendiente.

## v0.2.4
- Colecciones (tareas pendientes, goals, deseos…): cada tarea admite fecha tope y nota.
- 5 días antes de la fecha tope, si no está hecha, aparece en Hoy en «Fecha tope cerca» (sin notificaciones push: se ve al abrir la app).

## v0.2.3
- Libros: al añadir o tocar un libro, ficha con autor, fecha, puntuación (1–10) y formato físico/digital.

## v0.2.2
- Diario: añadir eventos, viajes, citas y elecciones desde el registro mensual (botones de categoría + «+» en cada día) y desde el registro futuro («+» en cada mes).

## v0.2.1
- «Porros» pasa a llamarse «CBD» (el histórico se conserva).
- Colecciones: el contador muestra el total de elementos y cuántos están hechos.


Archivos (todos en la **raíz** del repositorio `BULLET_JOURNAL`):
`index.html` · `sw.js` · `manifest.webmanifest` · `icon-192.png` · `icon-512.png` · `apple-touch-icon.png` · `LEEME.md`

## Novedades respecto a v0.1.0
- Diseño nuevo (papel punteado, iconos, modo claro/oscuro).
- Pestañas: Hoy · Diario (mes + registro futuro) · Colecciones · Análisis · Ajustes.
- Hoy: eventos con categoría, horas de sueño a mano, escalas de 3 niveles (rojo/azul/verde), energía 0–5, pasos, peso cada 15 días o mensual, Bristol con ilustración, sexo con iconos, tareas con fecha futura, notas aparte.
- Análisis: medias, comparación con el periodo anterior, resumen, gráfico de sueño, year in pixels, rachas, patrones alimento ↔ síntoma (mismo día, +1, +2) y relaciones entre variables. Siempre con n y fiabilidad.
- Iconos y tipografías se guardan en caché para usar sin conexión.
- Se añade `manifest.webmanifest` (faltaba en el repositorio).

## ⚠ Cambios en tus datos (esquema v1 → v2)
La app migra sola al abrirla, **sin borrar nada**:
- Estrés 0–5, Intensidad digestiva 0–5, Ciclo y Skincare mañana/noche se **archivan** (se conservan y salen en el backup/CSV) y se crean sus versiones nuevas. Los valores antiguos no se convierten: las escalas no son equivalentes.
- Se añaden Energía, Pasos y Peso.
- **Antes de actualizar, exporta un backup** (Ajustes → Exportar backup).

## 1. Subir los archivos (repositorio ya creado)
1. En el iPhone, en la app actual: **Ajustes → Exportar backup** → guárdalo en iCloud Drive.
2. En github.com abre `luciacarballob-lab/BULLET_JOURNAL`.
3. **Add file → Upload files** → arrastra los 7 archivos → mensaje «v0.2.0» → **Commit changes**. Sobrescriben a los anteriores.
4. Si aún no está activado: **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, carpeta `/ (root)` → **Save**.
5. Espera 1–2 min. URL: `https://luciacarballob-lab.github.io/BULLET_JOURNAL/`
   (Pages gratis requiere repositorio público. El código es público; tus datos no: viven solo en el iPhone.)

## 2. Instalar en el iPhone (solo la primera vez)
1. Abre la URL en **Safari**.
2. **Compartir → Añadir a pantalla de inicio** → Añadir.
3. Abre Bujo **desde el icono** (Safari y la app instalada tienen almacenes distintos).
4. Ajustes → Almacenamiento persistente → **Solicitar**.
5. Ajustes → **Exportar backup** para comprobar que funciona.

## 3. Actualizar sin perder datos (cada versión)
1. **Antes:** Ajustes → Exportar backup.
2. Sube los archivos nuevos a GitHub (paso 1.3).
3. En el iPhone, abre Bujo con conexión → aparecerá «Hay una versión nueva» → **Actualizar**. O Ajustes → **Buscar actualización**.
4. Comprueba la versión en Ajustes → App.

**Nunca borres el icono para «reinstalar»: eso borra los datos.**

## Imágenes de Bristol (opcional)
La app trae ilustraciones propias. Si quieres usar otras, crea una carpeta `bristol/` en el repositorio con `1.png` … `7.png` (fondo blanco o transparente, formato apaisado ~ 3:2). Se usarán automáticamente. Usa solo imágenes con licencia que permita publicarlas.

## Probar sin tocar tus datos
Ajustes → **Probar con datos demo**. Usa una base de datos separada con 150 días ficticios. «Salir del modo demo» la borra.

## Si algo va mal
Ajustes → Importar backup → elige el último JSON → revisa la vista previa → Sobrescribir.

## Limitaciones conocidas
- Sin notificaciones (iOS exige un servidor de terceros).
- El PIN protege frente a miradas, no cifra los datos.
- La primera vez necesita conexión para descargar iconos y tipografías; después funcionan offline.
