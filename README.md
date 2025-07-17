# Global Data Barometer Explorer

Prototype for fast, comparative “data portraits” of every country, built on the Global Data Barometer’s research.

**Live site:** <https://data-barometer-exp.vercel.app>  
**About page:** <https://data-barometer-exp.vercel.app/about>

## Overview 

The Global Data Barometer (GDB) tracks how nations govern, provide, and use data for public good.  
This explorer distills that evidence into an orientation layer for non-specialists: pick a country, get a snapshot, follow plain-language hints, and share a card that carries the story forward. :contentReference[oaicite:0]{index=0}

## Data — distilled, not re-scored 

Multiple GDB tables are merged into one per-country record.  
Every displayed parameter is rescaled between the observed “worst” and “best” values, trading absolute scores for relative pattern-finding. Think of it as **de-mathematization**: clarity first, numbers later. :contentReference[oaicite:1]{index=1}

## Design intent 

My first contact with the GDB datasets revealed impressive depth—and a steep learning curve.  
Question-mark tooltips translate indicator jargon; a globe landing view anchors each nation in the wider governance map. The goal is to lower entry costs without dumbing anything down. :contentReference[oaicite:2]{index=2}

## Country cards & sharing 

Selecting a country generates a compact card: distilled metrics, key context facts, and a stylised AI-generated relief image. Cards export as static PNGs or gentle animations for slides and social posts—small, portable touch-points that spotlight the Barometer’s work. :contentReference[oaicite:3]{index=3}

## Experience notes 

1. Desktop-first for legibility.  
2. Hover/tap reveals concise explanations.  
3. Visual hierarchy favours instant pattern reading over dense charts.  
4. Less “dashboard”, more “orientation map”.

## Scope & caveats 

1. Comparative bars support storytelling; do **not** treat lengths as precise metrics.  
2. Always cite the Global Data Barometer when reusing data.  
3. Edition/year coverage varies—check before combining with other sources.  
4. Relief images are decorative, not cartographic.

## Attribution 

Data & research © Global Data Barometer — see the GDB site for downloads, methodology, and licensing.  
Design & development: **Tommaso Prinetti** (SciencesPo médialab / independent designer-researcher).

## Cite 

> Prinetti, T. (2025). *Global Data Barometer Explorer* [visualisation prototype]. <https://data-barometer-exp.vercel.app/>  
> Data: Global Data Barometer (specify edition & year). <https://globaldatabarometer.org/>

## Questions? 

Open an issue—feedback welcomed.
