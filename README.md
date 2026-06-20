# Portfolio — Muhammad Irfan Fadhila

A clean, minimal portfolio site built around a "ledger" concept — each shipped
app is presented as a passbook entry, fitting the cooperative-fintech theme of
the work itself.

## Structure

```
index.html        Main page (hero, ledger, about, contact)
css/style.css      All styling — design tokens at the top of the file
js/projects.js     Project data — edit this to add/update/remove apps
js/main.js         Renders the ledger from projects.js, handles interactions
```

## Editing your projects

Open `js/projects.js`. Each entry in the `PROJECTS` array looks like this:

```js
{
  id: "mykisel",                 // unique, no spaces
  name: "MyKisel",
  tag: "Digital Cooperative Super App",
  description: "...",
  contributions: ["...", "..."], // bullet points
  stack: ["Flutter", "REST API"],
  links: {
    playstore: "https://...",
    appstore: "https://..."      // optional — omit if no iOS app
  }
}
```

Add a new object to the array to add a new project. The page re-renders
automatically — no other file needs to change.

## Deploying to GitHub Pages (mirfan23.github.io)

To publish at `https://mirfan23.github.io`, the repository itself must be
named exactly `mirfan23.github.io`. Steps:

1. Create a new repository on GitHub named **`mirfan23.github.io`**
   (this exact name is what makes GitHub serve it at the root domain).
2. Push these files to the repository's `main` branch:

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/mirfan23/mirfan23.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save. The site goes live at `https://mirfan23.github.io` within a minute or two.

If you'd rather keep this as a project repo (not the special username repo),
name it anything you like and enable Pages the same way — it'll be served at
`https://mirfan23.github.io/<repo-name>/` instead. In that case, all the
asset paths here are already relative, so no changes are needed.

## Local preview

No build step required. Either open `index.html` directly in a browser, or
serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
