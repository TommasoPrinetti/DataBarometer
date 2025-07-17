![THUMB](/static/THUMB_opt.jpg)


# Global Data Barometer Explorer

Prototype for fast, comparative “data portraits” of every country, built on the Global Data Barometer’s research.

[![SvelteKit][sveltekit-badge]][sveltekit-url]
[![Svelte][svelte-badge]][svelte-url]
[![TypeScript][ts-badge]][ts-url]
[![Vite][vite-badge]][vite-url]
[![Vercel][vercel-badge]][vercel-url]
[![Three.js][three-badge]][three-url]

**Live site:** <https://data-barometer-exp.vercel.app>  
**About page:** <https://data-barometer-exp.vercel.app/about>

---

## Overview

The Global Data Barometer (GDB) tracks how nations govern, provide, and use data for the public good. This explorer distills that evidence into an orientation layer for non-specialists: pick a country, get a snapshot, follow plain-language hints, and share a card that carries the story forward. 

---

## Data — distilled, not re-scored

Multiple GDB tables are assembled and reduced to a per-country record. Each displayed parameter is mapped between the observed “worst” and “best” values in the included data—**de-mathematization** to surface relative patterns before you dive into formal indicator scores. 

---

## Design intent

The GDB data is deep but daunting on first contact. Question-mark affordances translate indicator jargon; a globe landing view situates each country in the wider data-governance landscape and invites exploration. Goal: lower the entry cost without dumbing anything down. 

---

## Country cards & sharing

Selecting a country produces a compact card: distilled scores, light context facts, and a stylized AI-generated relief image. Cards can be downloaded (static) or animated for presentations and social posts—portable touch points that help circulate the Barometer’s work. 

---

## Experience notes

1. Desktop-first for clarity.  
2. Lightweight interaction: hover / tap for explanations.  
3. Visual hierarchy favors pattern reading over dense charts.  
4. Less *statistical dashboard*, more *orientation map*. 

---

## Scope & caveats

1. Comparative scaling aids communication; do **not** treat visual lengths as precise metrics.   
2. Always cite the Global Data Barometer when reusing data.   
3. Edition / year coverage varies; check before combining with other sources.   
4. Relief images are decorative, not cartographic. 

---

## Tech stack

> Update to reflect what you actually shipped; comment out what doesn’t apply.

- **Framework:** SvelteKit.  
- **Language:** TypeScript / Javascript / Svelte.  
- **Build tooling:** Vite.  
- **Hosting:** Vercel.  
- **3D / Globe:** Three.js / Threlte .  
- **AI relief imagery:** OpenAI Sora Image Generator.  

---

## Attribution

Data & underlying research: © Global Data Barometer. See the GDB site for datasets, methodology, and licensing terms.   

Project design & development: **Tommaso Prinetti** (SciencesPo médialab / independent designer-researcher). 

---

## Cite

> Prinetti, T. (2025). *Global Data Barometer Explorer* [visualization prototype]. <https://data-barometer-exp.vercel.app/>  
> Data: Global Data Barometer (2025). <https://globaldatabarometer.org/>. 

---

## Questions?

Open an issue—feedbacks are welcome.
  
---

<!-- Badge definitions -->
[sveltekit-badge]: https://img.shields.io/badge/SvelteKit-ff3e00?logo=svelte&logoColor=white&labelColor=black&style=flat-square
[sveltekit-url]: https://kit.svelte.dev

[svelte-badge]: https://img.shields.io/badge/Svelte-ff3e00?logo=svelte&logoColor=white&style=flat-square
[svelte-url]: https://svelte.dev

[ts-badge]: https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white&style=flat-square
[ts-url]: https://www.typescriptlang.org

[vite-badge]: https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white&style=flat-square
[vite-url]: https://vitejs.dev

[vercel-badge]: https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=flat-square
[vercel-url]: https://vercel.com

[three-badge]: https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white&style=flat-square
[three-url]: https://threejs.org
