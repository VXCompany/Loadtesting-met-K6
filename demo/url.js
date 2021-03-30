import http from 'k6/http';
import { sleep } from 'k6'; 

export let options = {
  vus: 10,
  duration: '30s',
  ext: {
    loadimpact: {
      projectID: 3531475,
      name: "Extra opdracht urlparameter: [initialen]",
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
  const baseUrl = __ENV.BASEURL;

  http.get(baseUrl);
  sleep(1);
}