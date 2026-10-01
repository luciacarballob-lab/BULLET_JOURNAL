# Bujo · v0.2.0

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
