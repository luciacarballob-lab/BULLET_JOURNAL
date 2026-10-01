# Bujo · v0.1.0 (fase 1a)

Archivos (todos van juntos en la raíz del repositorio):
`index.html` · `sw.js` · `manifest.webmanifest` · `icon-192.png` · `icon-512.png` · `apple-touch-icon.png`

## 1. Publicar en GitHub Pages (una vez)
1. En github.com: **New repository** → nombre `bujo` → **Public** → Create. (Pages gratis exige repo público; el código es público, tus datos **no**: viven solo en el iPhone).
2. **Add file → Upload files** → arrastra los 6 archivos → **Commit changes**.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, carpeta `/ (root)` → Save.
4. Espera 1–2 min. Tu URL: `https://TU-USUARIO.github.io/bujo/`

## 2. Instalar en el iPhone
1. Abre la URL en **Safari** (no Chrome).
2. **Compartir → Añadir a pantalla de inicio** → Añadir.
3. Abre Bujo **desde el icono** (los datos de Safari y los de la app instalada son almacenes distintos).
4. Ajustes → Almacenamiento → **Solicitar** (persistente).
5. Ajustes → Exportar backup → guárdalo en iCloud Drive para comprobar que funciona.

## 3. Actualizar sin perder datos
1. **Antes:** en la app, Ajustes → Exportar backup.
2. En GitHub: *Add file → Upload files* → sube los archivos nuevos (sobrescriben los anteriores) → Commit.
3. En el iPhone, abre Bujo con conexión → Ajustes → **Buscar actualización** (o aparecerá el aviso «Hay una versión nueva»).
4. Comprueba la versión en Ajustes → App.

Nunca borres el icono para «reinstalar»: eso borra los datos.

## Si algo va mal
Ajustes → Importar backup → elige el último JSON → revisa la vista previa → Sobrescribir.
