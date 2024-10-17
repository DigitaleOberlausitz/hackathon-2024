---
slug: challenge-erfassung-dachflaechen
title: "Challenge: Erfassung Dachflächen"
---

# Challenge: Erfassung Dachflächen

Solaranlagen (Photovoltaik oder Solarthermie-Anlagen) sind ein zentraler Bestandteil der Energiewende, das Potential für die Installation und Nutzung von Dachflächen oder anderen geeigneten Flächen ist jedoch noch lange nicht ausgeschöpft. Gerade in Görlitz, aber insbesondere in der Görlitzer Altstadt haben wir bspw. einen großen Nachholbedarf und sicherlich ein noch ungenutztes Potential.

Um die aktuelle Situation mit Daten und Fakten zu bewerten und diese auch in andere Planungs- und Entscheidungsprozesse der stadtischen Entwicklung (z. b. Wärmeplanung) einfließen zu lassen, benötigt es eine möglichst umfangreiche Datenquelle. Bestehende Datenquellen, wie z. B. das Solardatenkataster, liefern nicht genügend Informationen über den Standort und weitere Eigenschaften von Solaranlagen.

Die Herausforderung ist also eine automatisierte Art Bestandsaufnahme über alle Solaranlagen und mögliche Potenziale für die weitere Installationen von Anlagen zu erkennen und zu bewerten. Dies erfordert eine präzise Analyse von Dachflächen hinsichtlich ihrer Eignung für Solaranlagen.

## Ausgangssituation

Es sind Areal Images ("Satellitenbilder") aus geeigneten Datenquellen zu verwenden, auf Basis derer eine Lösungsimplementierung erfolgen kann. Hierzu sind in der internen Datenquelle "Geodatenquellen.md" verschiedene Datenquellen aufgelistet, die benötigte Input-Daten liefern. Darüber hinaus sind im Verzeichnis "Solaranlagen Bestandaufnahme" verschiedene Research Papers gelistet, die die Informationen zur Analyse solcher Daten liefern.

## Aufgabenstellung

Es soll ein System entwickelt werden, das folgende Aufgaben umsetzt-

* Identifikation vorhandener Solaranlagen: Erkennung und Auflistung von bereits installierten Solaranlagen auf Dächern
* Eignungsbewertung für Solaranlagen: Analyse und Auflistung von Dächern, zu ihrer Eignung für Solaranlagen, basierend auf Neigung, Größe, Ausrichtung und Art der Bebauung.

Die Ergebnisse sollen in einem (maschinenverarbeitbaren) Report ausgegeben werden und ggf. auch visualisiert werden.

Zusatz:
* Datenvisualisierung: Erstellen einer interaktiven Karte, die zeigt, welche Dächer bereits Solaranlagen haben und welche potenziell geeignet sind.
* Empfehlungen: Bereitstellung von Empfehlungen und Berechnungen zur potenziellen Energieerzeugung und Kosten-Nutzen-Analyse für Eigentümer geeigneter Dächer.
* Integration mit städtischen Planungsdaten: Verknüpfung mit vorhandenen städtischen Datenbanken, um Eigentümer und Verwalter von Gebäuden zu informieren und die Genehmigungsprozesse zu unterstützen.