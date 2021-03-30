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