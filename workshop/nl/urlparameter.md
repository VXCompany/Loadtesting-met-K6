# URL als parameter

[Terug naar het Workshop Script](handson.md)

In de oefeningen van de workshop zat de URL steeds in het testscript zelf. Dat is onhandig bij meerdere omgevingen en is eenvoudig op te lossen. Het is (zoals we gezien hebben) gewoon een JavaScript file die wordt uitgevoerd door de K6 CLI. We kunnen daarom bepaalde zaken buiten het script configureren en via Environment Variables in het script gebruiken. 

Maak bijvoorbeeld het volgende script (noem het "url.js"), pas daarbij je initialen aan:

```javascript
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
```

Om dit script te laten werken hebben we dus een omgevingsvariabele nodig "BASEURL". 

```bash
# Linux, WSL, MacOS
export BASEURL='https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com'
k6 cloud -e BASEURL=$BASEURL url.js

# Windows CMD
set BASEURL=https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com
k6 cloud -e BASEURL=%BASEURL% url.js

# Windows PowerShell
$env:BASEURL='https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com'
k6 cloud -e BASEURL=$env:BASEURL url.js
```

## Uitvoeren test

Vervolgens voeren wij de test uit. Je kunt dit lokaal doen en naar de K6 Cloud rapporteren of de gehele test in de K6 Cloud uitvoeren:

```bash
# Lokaal draaien en rapporteren naar de cloud
k6 run scenario.js -o cloud

# In de K6 cloud uitvoeren
k6 cloud scenario.js
```

Navigeer naar https://app.k6.io/projects/3531475 en controleer of ook deze resultaten in de app zijn verwerkt.

[Terug naar het Workshop Script](handson.md)


