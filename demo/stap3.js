import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
  ext: {
    loadimpact: {
      projectID: 3531475,
      name: "Stap 3: [initialen]",
      distribution: {
        'amazon:de:frankfurt': {
          loadZone: 'amazon:de:frankfurt',
          percent: 100
        }
      }
    }
  }
}

export default function () {
  http.get('https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com');
  sleep(1);
}