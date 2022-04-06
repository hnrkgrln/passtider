# Hitta passtid

Hitta passtider genom att låta ett Google Chrome meddela dig via en avisering när en ny tid finns tillgäng. Ett väldigt enkelt skript som egentligen bara klickar på "Första nya lediga tid" enligt givet intervall, tittar sedan i datumfältet och jämför med föregående datum om det finns en tidigare tid och skickar en avisering via Google Chrome så att du kan boka tiden.

Den här automatiseringen av att finna nya passtider förutsätter (1) Google Chrome och (2) tillägget Scripty. 

Självfallet lämnar jag INGA SOM HELST GARANTIER FÖR ATT DETTA KOMMER ATT FUNGERA FÖR DIG ELLER ANSVARAR FÖR NÅGRA SOM KONSEKVENSER SOM ANVÄNDNINGEN AV DETTA SKULLE KUNNA FÅ.

## Installation
### 1. Installera Google Chrome
Om du inte har Google Chrome installerad, gå till https://www.google.com/intl/sv_se/chrome/

### 2. Installera Scripty
Från Chrome Webstore, installera Scripty: https://chrome.google.com/webstore/detail/scripty-javascript-inject/milkbiaeapddfnpenedfgbfdacpbcbam

### 3. Lägg till skriptet i Scripty
Följ länken (https://scripty.abhisheksatre.com/#/share/script_1649178713796) och installera skriptet. Se till att det är aktiverat och körs automatiskt. 

Eller skapa ett nytt skript i Scripty och klistra in innehållet i script.js. Notera att skriptet i sådana fall måste 
ställas in:

```
Run script if: URL Contains Following Input 
https://bokapass.nemoq.se/Booking/Booking/Index/
```

Samt 

```
Trigger: Automatically, On Page load
```

### 4. Hitta passtider
1. Gå till https://polisen.se/tjanster-tillstand/pass-och-nationellt-id-kort/boka-tid-hitta-passexpedition/
2. Välj län.
3. Tillåt aviseringar i Chrome och fortsätt sedan att följa anvisningarna tills du kommer till "Välj tid".
4. Tryck en gång på "Första lediga tid".
5. Skriptet ska nu köras autoamtiskt och du ska få en avisering via Chrome när en ny tid är tidigare tillgänglig. 
6. Stäng INTE fliken eller Google Chrome.

Du kommer nu att få skrivbordsaviseringar när det finns en ny ledig tid. Gå då till den öppna fliken, välj den tid du vill ha och med fortsätt bokningen som vanligt.

## Notera
Första gången skriptet körs via Scripty måste aviseringar tillåtas från webbsidan (efter att du har valt län). Dyker det inte upp en fråga, klicka på hänglåset i adressfältet och klicka på att tillåta aviseringar. 

Har du Mac och inte får några aviseringar, måste du tillåta att Chrome skickar aviseringar i Systeminställningarna.