---
slug: challenge-hitzeprobleme
title: "Challenge: Identifizierung von Hitzeproblembereichen im Kontext der städtischen Wärmeplanung"
---

# Challenge: Identifizierung von Hitzeproblembereichen im Kontext der städtischen Wärmeplanung

Städte werden mit Blick auf den Klimawandel immer heißer. In Folge gibt gewisse Hotspots in den Städten, die sich überhitzen und die das Leben der Einwohner immer schwieriger machen. Mit verschiedenen Maßnahmen, wie bsp. zusätzliche Begrünung, Beschattung oder Entsiegelung jener Flächen, soll Lebensqualität in urbanen Räumen gezielt verbessert und die negativen Auswirkungen des Klimawandels gemindert werden.

## Ausgangssituation

Es werdem Daten für eine Bestandsanalyse für Hitze-Hotspots mittels Photogrammatrie benötigt. Genau genommen handelt es sich um Multispektralbilder eines Ortes. Hierzu sind in der internen Datenquelle "Geodatenquellen.md" verschiedene Datenquellen aufgelistet, die benötigte Input-Daten liefern.

## Aufgabenstellung

Identifizierung von Hitzeproblembereichen im Kontext der städtischen Wärmeplanung: 

1. Es sind Wärmebilder aus einer geeigneten Quelle (siehe genannte Datenquelle) zu analysieren,
2. die dann als separate Ortsbezogene Einträge bewertet, aufgelistet und durchsucht werden können, um
3. aufgrundlage dessen weitere Berechnungen machen zu können. Bspw. könnte man eine Hitzekarte erstellen.

Die erfassten Daten (aus 1.) könnten z. B. auch mittels Open Street Map und Tags gespeichert werden – mehr dazu siehe interne Datenquelle "Open-Street-Maps - Hilfsmaterial.md".

## Challenge-Ergebnisse

Der Kern dieser Challenge war es, geeignete Daten für die Darstellung von Hitze-Hotspots zu identifizieren bzw. aufzubereiten.

Der Challenge-Owner, Dr. Marek Jaskólski ([Europastadt GörlitzZgorzelec GmbH](https://www.goerlitz.de/Unternehmer-_Investmentservice.html)), stellte einige wissenschaftliche Quellen bereit, die mehr Details zu dem Themengebiet und weitere Hinweise zu möglichen Datenquellen lieferten. Da es auch um Open-Data geht, wurden freie und öffentlich zugängliche Daten der drei Satelliten "Sentinel-2", "Sentinel-3" und "Landsat" als geeignet identifiziert und verwendet.

Das Team teilte sich in 3 verschiedene Aufgabenbereiche ein, an denen während des Wochenendes gearbeitet wurde:

1. Zugriff auf das API der jeweiligen Satellitendatenschnittstellen.
2. Auswertung der Datenqualität und -Auflösung. Es standen Temperaturdten mit Einer Auflösung von 1 km bis minimal 100 m zur Verfügung. Für die Betrachtung des Problems, Orte als Hitze-Hotspots in einer Stadt zu identifzieren, war jedoch klar, dass diese Auflösung viel zu grob war.
3. Anwendung der Temperaturdaten auf eine Karte, sodass letztlich eine Art Heat-Map dargestellt werden kann.

Der Schwerpunkt der Challenge fiel also auf Punkt 2, wobei zur Lösung verschiedene Strategien diskutiert und bewertet wurden, und schlussendlich auch an der Implementierung einer dieser Strategien gearbeitet wurde. Um die Auflösung der Temperaturdaten nun zu verfeinern wurde auf einem Zusammenhang zwischen feiner aufgelösten, anderen Oberflächeneingeschaften und den grob aufgelösten Temperaturdaten aufgebaut. Das Team konnte also mithilfe einer Abbildungsfunktion, feinere Temperaturdaten ermitteln, die dann eine Anwendbarkeit im städtischen Raum erlauben.
Neben der Leistung, einen schlüssigen Ansatz der Abbildung zu finden, konnte das Team außerdem eine Fehlerbetrachtung und Abgrenzung durchführen. Es ist nämlich so, dass bei diesem Verfahren bzw. dem ermittelten Modell Daten durch verschiedene Fehlerursachen verfälscht werden können bzw. Trugschlüsse aus falschen Daten gezogen werden können. Ein sehr einfaches Beispiel für Fehlergrößen ist die Bewölkung. In den ursprünglichen (grobauflösenden) Temperaturdaten ist nicht ersichtlich, welcher Bewölkungsgrad vorliegt und wie dieser die Messung für einen bestimmten Ort beeinflusst. Ein nicht unmittelbar offensichtlicher Umstand, der jedoch auch genannt wurde, ist: Die Verwendung von Oberflächenreflexionseigenschaften als Messgröße sind stark temperaturabhängig. Beispielweise wurden ähnliche Werte für die Oberfläche von einem See (Material: Wasser), wie für die Oberfläche eines Instrustriegebäudes mit Wellblech (Material: Metall) zurückgegeben. Sicher ist, dass die Temperatur dieser Materialien unterschiedlich ist. Somit ist also das Einbeziehen, des Materials bzw. Untergrundtyps entscheidend für eine korrekte Ableitung einer Temperatur. Weitere Kartendaten sind für diesen Zweck daher ein weiterer sinnvoller Input.

Die kritische Eigenbewertung des Teams ist somit ein weiteres Qualitätsmerkaml der erreichten Ergebnisse. In der Ergebnispräsentation konnte man ausführlich darstellen, dass es verschiedene Fehlerquellen gibt, die die Ergebnisse verfälschen und beeinflussen, sowie welche diese beispielweise sein könnten.

Zuletzt wurden noch offene Arbeitsfelder beschrieben. Die aus der Fehlerbetrachtung gewonnenen Erkenntnisse zeigen: es sind noch weitere Informationsquellen einzubinden, um die Korrektheit der ermittelten Daten zu erhöhen. Auch können noch weitere Datenquellen einbezogen werden, die eine direkte Temperatur, jedoch in feinerer Auflösung liefern. Sicherlich ist es gerade für das Anwendungsgebiet im städtischen Raum einfacher möglich, weitere Datenquellen zu erschließen, die bereits existieren oder diese eben zu schaffen.

## Projektreferenz

Das Code-Projekt wurde unter https://github.com/DigitaleOberlausitz/hackathon-2024-hotspot-challenge als Fork des Team-Projekts archiviert. Es kam Python für die Aufbereitung und Verarbeitung der Satelliten zum Einsatz, sowie JavaScript für die Datenvisualisierung in einer Karte.