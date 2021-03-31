# Lokaal testen

[Terug naar het Workshop Script](handson.md)

![](/images/lokaal1.png)

We beginnen met een simpel script. Maak lokaal een bestand aan met de volgende inhoud:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com');
  sleep(1);
}
```

En sla het op als "stap2.js".

Voer daarna de test uit:

```bash
k6 run stap2.js
```

Als de testrun lukt, krijg je de zogeheten "end-of-test" samenvatting.

> Wanneer je aan K6 geen opties meegeeft en in de testen ook geen criteria hebt gedefinieerd, is de "end-of-test" samenvatting de enige output van de CLI.

Hoewel de informatie zeer beperkt is, zit hier toch wel nuttige info bij:

![](/images/local1.png)

- http_req_failed: 0% is natuurlijk in dit geval prima, maar als we de belasting gaan opvoeren kan dit percentage gaan oplopen;
- iterations: aantal runs, standaard 1 run (dus 1 keer de http.get uit de functie hierboven);
- vus: Virtual Users, het aantal gesimuleerde gebruikers;
- vus_max: maximaal aantal Virtual Users (het plafond);

### Meer gebruikers

Laten we de belasting gaan opvoeren door het aantal gebruikers te verhogen + een langere looptijd te nemen. Door de "sleep" in het script, zal er tussen de iteraties steeds 1 seconde gewacht worden.

```bash
k6 run --vus 10 --duration 30s stap2.js
```

Controleer zelf nu de "end-of-test" summary, die moet als het goed is 10 vus laten zien en ~300 iteraties (10 gebruikers, 30 seconden, enkele http.get met 1 seconde sleep => 10 x 30 x 1 = 300).

### Opties toevoegen

Om nu niet steeds het aantal VU's me te hoeven geven, kunnen we deze ook in ons script meenemen. Pas het bestand script.js daarom aan en voeg de "options" constante toe:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  http.get('https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com');
  sleep(1);
}
```

Run de test weer, maar geef nu geen VUs of testtijd mee:

```bash
k6 run stap2.js
```

Als het goed is, loopt de test nu ook met 10 VUs en 30 seconden. 

De output van de testrun is summier (het is ook slechts een samenvatting), maar we kunnen onze lokale testrun output laten visualiseren in de K6 Cloud. Dat laten we zien in de volgende stap.

[Naar stap 3: Output naar de cloud](3-output.md)

[Terug naar het Workshop Script](handson.md)
