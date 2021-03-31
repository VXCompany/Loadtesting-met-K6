# Output naar de cloud

[Terug naar het Workshop Script](handson.md)

![](/images/output1.png)

In tegenstelling tot K6 zelf, is K6 Cloud een commercieel SaaS product. Je kunt de K6 Cloud gebruiken voor het visualiseren, analyseren en plannen van de testruns. Ook kun je gedistribueerd een veel grotere load toepassen dan dat je dat vanaf 1 machine kunt doen. 

> De K6 Cloud draait op Amazon Web Services. Dit betekent, dat je in de praktijk deze IP adressen soms zult moeten "whitelisten" als de omgeving die getest wordt daarmee is afgeschermd.

Tijdens de setup heb je een K6 Cloud account aangemaakt. Om onze resultaten ook daadwerkelijk te uploaden in de Cloud, moeten we een API token opvragen en de K6 CLI configureren. 

### Inloggen

Configureer de lokale K6 CLI, dit doe je normaal gesproken maar 1 keer (tenzij je token verandert, verloopt of wijzigt):

```bash
k6 login cloud
```

Login met het emailadres en wachtwoord, dat je hebt gebruikt tijdens de Setup stappen.

Ga daarna ook vast naar https://app.k6.io en login met dezelfde gegevens. Hier zullen we straks de test rapporten kunnen bekijken. 


### Project toevoegen

K6 Cloud werkt met projecten voor het groeperen van resultaten en testen. Speciaal voor de workshop is een project "loadtesting-met-k6" aangemaakt, maar we moeten in ons script nog vertellen welk project dat is. Dit doen we door het Project ID aan de opties toe te voegen en dit ID vind je o.a. in de interface van K6 Cloud terug. 

Pas het "options" object aan. Voor onze workshop kun je deze ("3531457") waarde gebruiken en vul bij "name" je eigen initialen in, zodat we straks de verschillende resultaten kunnen zien. 
Sla het bestand op als "stap3.js"

```javascript
...


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

...
```

Draai nu de test, maar met de optie voor output naar de K6 Cloud:

```bash
k6 run stap3.js -o cloud
```

Navigeer naar https://app.k6.io/projects/3531475 en controleer of je eigen resultaten in de app zijn verwerkt:

![](/images/stap3-1.png)

We hebben nu de test lokaal uitgevoerd en de resultaten laten verwerken door de K6 Cloud. In de volgende stap zullen we ook de test vanuit de cloud uitvoeren.

[Naar stap 4: Testrun vanuit de cloud](4-cloud.md)

[Terug naar het Workshop Script](handson.md)