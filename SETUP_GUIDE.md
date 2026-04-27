# MyLibrary — PWA Setup Guide

## Files du har modtaget
- `MyLibrary.html` — selve appen
- `manifest.json` — app-definition (navn, farver, ikoner)
- `sw.js` — service worker (gør den offline-klar)
- `icon-192.png` — app-ikon (lille)
- `icon-512.png` — app-ikon (stort)
- `SETUP_GUIDE.md` — denne vejledning

---

## Trin 1: Opret en gratis GitHub-konto
1. Gå til [github.com](https://github.com)
2. Klik **Sign up** og opret en konto
3. Vælg det gratis plan

---

## Trin 2: Opret et nyt repository
1. Klik på det grønne **New** knap (eller **+** øverst til højre → New repository)
2. Navngiv det fx `mylibrary`
3. Sæt det til **Public** (kræves for gratis GitHub Pages)
4. Klik **Create repository**

---

## Trin 3: Upload filerne
1. Klik på **uploading an existing file** linket på den tomme repository-side
2. Træk alle 5 filer ind:
   - `MyLibrary.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Skriv en besked som "Initial upload" i feltet nederst
4. Klik **Commit changes**

---

## Trin 4: Aktiver GitHub Pages
1. Gå til repository **Settings** (øverst i menuen)
2. Klik på **Pages** i venstre menu
3. Under **Source** → vælg **Deploy from a branch**
4. Under **Branch** → vælg **main** og **/ (root)**
5. Klik **Save**
6. Vent 1-2 minutter — din URL er nu:
   `https://DITBRUGERNAVN.github.io/mylibrary/MyLibrary.html`

---

## Trin 5: Installer som app på telefon (iPhone)
1. Åbn Safari (skal være Safari, ikke Chrome)
2. Gå til din URL
3. Tryk på **Del-ikonet** (firkant med pil op) nederst
4. Scroll ned og tryk **"Føj til hjemmeskærm"**
5. Giv den et navn og tryk **Tilføj**
6. Nu har du et app-ikon på din startskærm ✓

## Installer på Android
1. Åbn Chrome
2. Gå til din URL
3. Tryk på de tre prikker øverst til højre
4. Tryk **"Tilføj til startskærm"** eller **"Installer app"**
5. Tryk **Installer** ✓

## Installer på PC (Chrome/Edge)
1. Gå til din URL i Chrome eller Edge
2. I adresselinjen er der et lille **install-ikon** (skærm med pil)
3. Klik det og vælg **Installer**
4. Appen åbner nu som et selvstændigt vindue ✓

---

## Trin 6: Sync mellem enheder
Din app bruger to lag til at gemme data:

**Automatisk (localStorage):** Data gemmes automatisk i browserens hukommelse.
Hver enhed har sin egen localStorage, så du skal bruge sync-funktionen
til at dele data på tværs.

**Sync på tværs af enheder:**
1. Åbn appen → Tryk 💾 Save → "☁ Open sync settings"
2. Tryk **"Create new sync room"** på din første enhed
3. Du får en sync-kode — kopier den
4. Åbn appen på din anden enhed → samme menu → paste koden → **Join**
5. Herefter synkroniserer appen automatisk ✓

---

## Når du opdaterer appen (ny version fra Claude)
1. Download den nye `MyLibrary.html` fra Claude
2. Gå til dit GitHub repository
3. Klik på `MyLibrary.html` filen
4. Klik på **blyant-ikonet** (Edit) øverst til højre
5. Klik **"..."** → **"Upload file"** — eller:
   - Tryk på pencil-ikonet
   - Slet alt indhold
   - Paste det nye indhold
6. Commit ændringerne
7. Appen opdaterer sig automatisk på alle enheder inden for få minutter

**Alternativt via GitHub Desktop (nemmere til fremtidige opdateringer):**
- Download [GitHub Desktop](https://desktop.github.com)
- Clone dit repository
- Erstat filen lokalt
- Commit og push — appen opdaterer automatisk

---

## Dine data er sikre
- Data gemmes i **localStorage** på hver enhed (virker offline)
- Sync via **jsonblob.com** holder alle enheder opdateret
- Du kan altid lave en backup via 💾 → "Download updated file"

---

## URL til at dele
`https://DITBRUGERNAVN.github.io/mylibrary/MyLibrary.html`

Erstat `DITBRUGERNAVN` med dit GitHub-brugernavn og `mylibrary` med dit repository-navn.
