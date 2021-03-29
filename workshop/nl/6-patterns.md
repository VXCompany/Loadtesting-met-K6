# Patronen

[Terug naar het Workshop Script](handson.md)

Belasting is in de praktijk vrijwel nooit lineair en er zijn vaak verschillende patronen te herkennen (denk bijvoorbeeld aan piekbelasting op bepaalde momenten). Om dit goed na te kunnen bootsen heeft K6 verschillende opties, waarvan we er hier 1 behandelen. Voor alle overige patronen: https://k6.io/docs/using-k6/scenarios/executors 

## Ramping VU

Ramping VU oftewel: oplopende Virtual Users. In dit patroon laten we het aantal gebruikers op "0" beginnen en gedurende een periode oplopen. Maak een nieuw bestand aan of hergebruik het script uit de vorige stap (stap5.js). We verwijderen "duration" en het aantal "vus" en nemen een blok met "stages" op.  

Zorg er voor, dat het options blok de volgende configuratie bevat en vul ook hier bij de initialen je eigen waarde weer in: 

```javascript
export let options = {
    maxRedirects: 0,
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
		},
    stages: [
      { duration: '10s', target: 10 }, 
      { duration: '20s', target: 50 }, 
      { duration: '30s', target: 0 }, 
    ],
    discardResponseBodies: true
};
```

## Uitvoeren test

Vervolgens voeren wij de test uit. Je kunt dit lokaal doen en naar de K6 Cloud rapporteren of de gehele test in de K6 Cloud uitvoeren:

```bash
# Lokaal draaien en rapporteren naar de cloud
k6 run stap5.js -o cloud

# In de K6 cloud uitvoeren
k6 cloud stap5.js
```

Dit durt natuurlijk iets langer: 1 minuut voor de test en maximaal 30 seconden voor het netjes afbouwen aan het eind. Navigeer naar https://app.k6.io/projects/3531475 en controleer of ook deze resultaten in de app zijn verwerkt:

![](/images/stap6-1.png)

Wat vooral op zou moeten vallen is het VU patroon, daar is heel duidelijk het oplopende patroon uit de 3 stages te herkennen (de grijze lijn).

[Naar stap 7: Finished](7-finished.md)

[Terug naar het Workshop Script](handson.md)