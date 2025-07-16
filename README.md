Global Data Barometer Explorer

Accessible, comparative country "data portraits" distilled from the Global Data Barometer (GDB) research datasets. Prototype submitted to the Global Data Barometer concourse.

Live site: https://data-barometer-exp.vercel.app/About: https://data-barometer-exp.vercel.app/about

Overview

Governments generate large volumes of data, but availability, openness, and practical usability vary widely. The Global Data Barometer documents these conditions through an expert-led research program covering governance, capability, availability, and use of data for the public good. This explorer narrows that rich evidence base into a quick, visual orientation layer aimed at non‑specialists: pick a country, see an at‑a‑glance profile, follow inline explanations, and share a card that carries the story forward.

Data: distilled, not re‑scored

The app pulls from the Global Data Barometer’s published datasets (editions vary; check site for current coverage). Multiple GDB tables are assembled and reduced to a per‑country record. Rather than reproduce original numeric scales, each displayed parameter is mapped between the observed "worst" and "best" values in the included data. Think of it as a comparative signal to support sense‑making—not a substitute for official indicator scores. I describe this as a deliberate de‑mathematization step: making relative patterns legible before you dive into the numbers.

Design intent

My first encounter with the GDB data: impressive depth; also hard to grasp quickly without domain knowledge. This project aims to lower that entry cost. Question‑mark affordances next to most labels surface short plain‑language descriptions drawn from the Barometer’s conceptual framework. The initial globe view anchors each country in its global data governance context and invites exploration.

Country cards & sharing

Selecting a country generates a compact card that bundles distilled scores, minimal context facts, and a stylized relief image hinting at place (AI‑generated; illustrative only). Cards can be downloaded (static) or animated for presentations and social sharing—small, portable touch points that help spread awareness of the Barometer’s work.

Experience notes

• Desktop‑first for clarity.• Lightweight interaction; hover/tap for explanations.• Visual hierarchy favors immediate pattern reading over dense charts.• Less "statistical dashboard," more "orientation map."

Scope & caveats

• Comparative scaling is optimized for communication; do not treat visual lengths as precise metrics.• Always cite the Global Data Barometer when reusing data.• Check edition/year before combining with other sources; country coverage differs across releases.• Relief images are decorative, not cartographic.

Attribution

Data & underlying research: © Global Data Barometer. See the GDB site for data downloads, methodology, and licensing terms.

Project design & development: Tommaso Prinetti (SciencesPo médialab / independent designer‑researcher).

Thanks to the Global Data Barometer team & partners for making the data open and reviewable.

Cite

Suggested citation (adapt as needed):

Prinetti, T. (2025). Global Data Barometer Explorer [Visualization prototype]. https://data-barometer-exp.vercel.app/  Data: Global Data Barometer (see specific edition & year). https://globaldatabarometer.org/

Questions or suggestions? Open an issue.

