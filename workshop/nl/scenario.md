# Een scenario

[Terug naar het Workshop Script](handson.md)

Scenario's bieden de mogelijkheid om meerdere patronen te combineren. Je kunt je voorstellen, dat je bijvoorbeeld voor verschillende doelgroepen aparte patronen maakt. 
Meer info: https://k6.io/docs/using-k6/scenarios

Maak een nieuwe file (noem het "scenario.js") en neem deze inhoud over, pas daarbij je initialen aan: 

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  ext: {
    loadimpact: {
      projectID: 3531475,
      name: "Extra opdracht scenarios: [initialen]",
      distribution: {
        'amazon:de:frankfurt': {
          loadZone: 'amazon:de:frankfurt',
          percent: 100
        }
      }
    }
  },

  discardResponseBodies: true,

  scenarios: {
    webvisitors: {
      executor: 'constant-vus',
      exec: 'visitors',
      vus: 50,
      duration: '30s',
    },
    appusers: {
      executor: 'per-vu-iterations',
      exec: 'app',
      vus: 20,
      iterations: 10,
      startTime: '10s',
      maxDuration: '1m',
    },
  },

};

export function visitors() {
  http.get('https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com');
  sleep(1);
}

export function app() {
  http.get('https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/api/candidates/match');
}
```

Er zitten hier dus 2 scenario's in: "webpage visitors" en "app users". 

- webvisitors: 50 Virtual Users (vus) doen zoveel mogelijk requests (constant-vus) binnen 30 secondden (duration). Hiervoor wordt de JavaScript functie "visitors" gebruikt (exec).
- appusers: 10 seconden na de start van de test (startTime) doen 20 Virtual Users (vus) elk 10 iteraties. Dit moet binnen 1 minuut (maxDuration) afgerond zijn. Hiervoor wordt de JavaScript functie "app" gebruikt (exec).

## Uitvoeren test

Vervolgens voeren wij de test uit. Je kunt dit lokaal doen en naar de K6 Cloud rapporteren of de gehele test in de K6 Cloud uitvoeren:

```bash
# Lokaal draaien en rapporteren naar de cloud
k6 run scenario.js -o cloud

# In de K6 cloud uitvoeren
k6 cloud scenario.js
```

Dit durt natuurlijk iets langer: 1 minuut voor de test en maximaal 30 seconden voor het netjes afbouwen aan het eind. Navigeer naar https://app.k6.io/projects/3531475 en controleer of ook deze resultaten in de app zijn verwerkt:


[Terug naar het Workshop Script](handson.md)