# Een webrecording

[Terug naar het Workshop Script](handson.md)

Met de hand de test scripts opzetten is natuurlijk een mogelijkheid, maar niet de enige. Vooral wanneer er API calls e.d. bij komen kijken kan dat een behoorlijk grote klus worden..... er zijn gelukkig alternatieven!

## Een webrecording maken

Bij het maken van een webrecording draait het om het opnemen van een gebruikerssessie om die vervolgens in een test te kunnen gebruiken. Het proces hierbij is als volgt:

1. Opname maken van een gebruiker- of API sessie
2. Converteren van de opname in een test
3. Opschonen van de test
4. Toevoegen van eventuele K6 opties (zoals we die eerder hebben gezien)
5. Uitvoeren van de test

We beginnen dus met het opnemen van een sessie. Hoe dit precies moet verschilt per browser, maar dit zijn de stappen voor Google Chrome:

1. Open Google Chrome
2. Open de "Developer Toolbar" ("Hulpprogramma's voor ontwikkelaars" in de Nederlandse versie), bijvoorbeeld met Ctrl-Shift-I
3. Kies binnen deze toolbar voor de "Network" tab
4. Kies dan voor "Clear" om het log te legen en schoon te beginnen + zorg dat het vakje "Preserve log" aangevinkt staat (zie afbeelding)

![](/images/clear.png)

5. Navigeer in de browser naar onze test applicatie: https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com 

6. Klik op "Log in" (dit is een dummy login, er is geen gebruikersnaam of wachtwoord nodig)
7. Klik een keer op "clear" om een andere kandidaat te krijgen
8. Klik op "favorite" om een match te maken

Als het goed is, heb je nu in de Network tab een overzicht van de calls die onderwater zijn uitgevoerd. Deze gaan we nu opslaan als webrecording in het HAR formaat. 

9. Rechter muisknop op 1 van de regels in de Network tab en kies voor: "Save all as HAR with content", zie afbeelding

![](/images/saveashar.png)

10. Sla het bestand op (kies zelf een naam), we gaan deze daarna converteren naar een K6 script.

## Een webrecording omzetten

De HAR recording omzetten naar een script kan met de K6 CLI. Gebruik hiervoor het commando:

```bash
# kies de naam die je in de vorige stap bij het opslaan van de HAR gekozen hebt
k6 convert demo.har > stap5.js
```

Dit maakt een nieuwe file aan, stap5.js en deze gaan we vervolgens opschonen.

## Opschonen

Wanneer je de zojuist gemaakte stap5.js in een editor (Visual Studio Code, Notepad, Notepad++, etc.) opent, zie je de geconverteerde data.

![](/images/stap5-1.png)

In het bestand komen verschillende "sleep" commando's voor. Dit is de tijd die gewacht is tussen de verschillende acties (het klikken op de Login, Clear en Favorite knop in de app). In plaats van verschillende tijden te pakken, nemen we hier nu voor alle wachttijden 2 seconden op. Pas het bestand zo aan, dat alle sleep commando's 2 seconden zijn:

```javascript
...

		res = http.batch(req);
		sleep(2);
		req = [{
			"method": "get",
			"url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/api/candidates/match",
			"params": {

...
```

## Opties toevoegen

Net als bij eerdere test scripts, passen we bepaalde opties toe. Vul ook hier bij de initialen je eigen waarde in:

```javascript
export let options = {
    maxRedirects: 0,
		vus: 10,
		duration: '30s',
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

Navigeer naar https://app.k6.io/projects/3531475 en controleer of ook deze resultaten in de app zijn verwerkt:

![](/images/stap5-2.png)

## Tip

Naast de conversie van een HAR file heeft K6 ook browser extensies voor Chrome en Firefox voor het opnemen en converteren van een sessie. Meer info: [Browser recorder](https://k6.io/docs/test-authoring/recording-a-session/browser-recorder)

In de volgende stap zullen we kijken naar patronen, waarbij we de belasting niet meer lineair configureren.

[Naar stap 6: Patronen](6-patterns.md)

[Terug naar het Workshop Script](handson.md)