# God's Project Company — Website

A 5-page static site (Home, About, Surveying & Engineering, GIS, Contact) — plain HTML/CSS/JS, no build tools, no dependencies to install.

## Files
```
index.html        Home
about.html         About
surveying.html     Surveying & Engineering
gis.html           GIS
contact.html       Contact
css/style.css      All styling
js/main.js         Nav toggle, footer year, animations
```

## What to edit first
Search each file for text wrapped in **`[brackets]`** (styled in rust-red as `.edit-me`) — these are the placeholders: your name, bio, email, phone, location, certifications, and real project details. Just replace the bracketed text, keep the surrounding HTML tags.

## Deploy free on GitHub Pages
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. `gpc-website`) — public, no README/gitignore needed.
3. Upload all files in this folder to the repo (drag-and-drop works on github.com, or use `git push`).
4. Go to the repo's **Settings → Pages**.
5. Under "Build and deployment," set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
6. Wait ~1 minute — your site will be live at `https://<your-username>.github.io/gpc-website/`.

## Making changes later
- **Small text edits:** open the file directly on github.com, click the pencil (edit) icon, make changes, commit. Live site updates in ~1 minute.
- **Bigger changes:** clone the repo locally, edit in any code/text editor, then `git add . && git commit -m "update" && git push`.
- No coding framework, no `npm install`, nothing to break — it's just HTML files.

## Contact form note
The Contact page form currently opens the visitor's email client (`mailto:`) — works immediately, zero setup, but isn't a "real" inline submission. For a free inline form later:
1. Sign up at formspree.io (free tier).
2. Replace the `<form action="mailto:...">` line in `contact.html` with the endpoint Formspree gives you, and change `method="get"` to `method="POST"`.

## Custom domain (optional, later)
GitHub Pages supports a custom domain (e.g. `godsprojectcompany.com`) for free once you own the domain — add it under Settings → Pages → Custom domain.
