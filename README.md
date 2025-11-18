# Responsive Landing Page

A simple static responsive landing page built with HTML, CSS, and JavaScript.

Files
- `index.html` — main HTML file
- `style.css` — styles for layout, dark mode and responsive navigation
- `script.js` — small UI behaviors (scroll header, back-to-top, menu, theme, print)

Prerequisites
- Python 3 installed (optional, only needed to run the simple preview server)
- OR VS Code with the **Live Server** extension for quick previews

Run locally (PowerShell)

Foreground server (keeps terminal attached; stop with Ctrl+C):

```powershell
python -m http.server 5500
```


Start server in background (PowerShell):

```powershell
Start-Process -NoNewWindow -FilePath python -ArgumentList '-m http.server 5500'
```

To stop a background server you started this way, either find and stop the Python process, or restart your terminal session. If you started the server in the foreground, press `Ctrl+C` to stop it.

VS Code Live Server
- Install the "Live Server" extension and click "Go Live" in the status bar to preview the site without starting a Python server.

Notes
- This is a static project — no build step required.
- If you want, I can start the preview server for you now and provide the running terminal URL.
