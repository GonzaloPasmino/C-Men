# C-MEN

Club privado de amigos: mesa larga, buena barra, noches y montaña.

Web hecha con **React + Vite + Tailwind CSS**, publicada con GitHub Pages.

## Ver la web en tu PC

Necesitas [Node.js](https://nodejs.org) instalado. Luego, en la carpeta del proyecto:

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:5173/C-Men/
```

## Dónde cambiar cosas

| Quiero cambiar... | Archivo |
|---|---|
| Textos, recuerdos, planes de ejemplo, integrantes | `src/data.js` |
| Colores y tipografías | `src/index.css` (bloque `@theme`) |
| Una sección concreta | `src/components/` (un archivo por sección) |
| Fotos | carpeta `public/` y se referencian desde `src/data.js` |

## Cómo trabajamos (práctica de GitHub)

1. `git switch -c mi-cambio` — cada cambio en su propia rama.
2. Editar, probar con `npm run dev`.
3. `git add .` · `git commit -m "qué cambié"` · `git push -u origin mi-cambio`
4. Abrir un **Pull Request** en GitHub y pedir revisión al otro.
5. Al hacer merge a `main`, GitHub Actions publica la web solo.
