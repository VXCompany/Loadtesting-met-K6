# Loadtesting met K6 - Cheat Sheet

### Run test lokaal

```bash
k6 run script.js
```

### Login K6 Cloud

```bash
k6 login cloud
```

### Run test lokaal met output naar K6 Cloud

```bash
k6 run script.js -o cloud
```

### Run test in de K6 Cloud

```bash
k6 cloud script.js
```

### Basis script

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com');
  sleep(1);
}
```

### Options

- projectID: testen koppelen aan een K6 Cloud project
- distribution: bij cloudtesten bepaalt dit welke Amazon region wordt gebruikt
- discardResponseBodies: we doen in de scripts niets met de API response (scheelt geheugen)

```javascript
export let options = {
  ext: {
    loadimpact: {
      projectID: 3531475,
      name: "Stap 5: [initialen]",
      distribution: {
        'amazon:de:frankfurt': {
          loadZone: 'amazon:de:frankfurt',
          percent: 100
        }
      }
    }
  }
  discardResponseBodies: true
};
```

### Stages

- stages: meerdere stages vooor een bepaald patroon (target = het aantal VU's)

```javascript
export let options = {
  stages: [
    { duration: '10s', target: 10 }, 
    { duration: '20s', target: 50 }, 
    { duration: '30s', target: 0 }, 
  ]
};
```

### Scenario's

- webvisitors: 50 Virtual Users (vus) doen zoveel mogelijk requests (constant-vus) binnen 30 secondden (duration). Hiervoor wordt de JavaScript functie "visitors" gebruikt (exec).
- appusers: 10 seconden na de start van de test (startTime) doen 20 Virtual Users (vus) elk 10 iteraties. Dit moet binnen 1 minuut (maxDuration) afgerond zijn. Hiervoor wordt de JavaScript functie "app" gebruikt (exec).

```javascript
export let options = {
  ext: {
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
