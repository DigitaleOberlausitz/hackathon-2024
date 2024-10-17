---
slug: challenge_eisenbahn
title: "Challenge: Wartungsmaßnahmen im Gleisnetz der Eisenbahn"
---

# Challenge: Wartungsmaßnahmen im Gleisnetz der Eisenbahn

Bei dieser Challenge geht es um die Verbesserung von Planung von Instandsetzungsmaßnahmen im ÖPNV, insbesondere im Gleis- und Schienennetz. Eine Steigerung der Effektivität soll schließlich zu einer besseren Kosteneffizienz führen. Dabei geht es auch um die Entwicklung neuer Lösungsansätze bzw. Erforschung neuer Zusammenhänge verschiedener Datenarten.

## Ausgangssituation

Anonymisierte Daten einer "echten" europäischen Eisenbahnstrecke werden als Input beim Hackathon bereitgestellt:
* Darin gibt es 2 Zustandskennzahlen mit örtlichem Bezug auf der Strecke
  * als Beispiel: Standardabweichung über eine Messgröße berechnet über 200m
  * Zustandskennzahlen werden als Datenhistorie bereitgestellt (mehrere Zustände an einem Ort über die Zeit)
* Daten über die Durchführung von Instandsetzungsmaßnahmen auf dieser Strecke
  * Ebenfalls als Datenhistorie mit örtlichem Bezug
  * Anonymisierte Klassifizierung von Maßnahmen (es gibt verschiedene Maßnahmentypen)

## Aufgabenstellung

Kernfragestellung ist: Wie wirken sich die verschiedenen Maßnahmentypen auf den Zustand einer Eisenbahnstrecke aus?

Ergebnis könnte eine feste Wirkung, z.B. Maßnahme X verbessert den Zustand immer um 1,5. Wahrscheinlicher ist jedoch die Wirkung in Abhängigkeit vom Ausgangszustand (eine Art Funktion sozusagen). Es ist also die Wirkungsweise der Maßnahmen, die durch geeignete Datenanalyseverfahren zu ermitteln ist.
