import React, { useState } from "react"
import { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout"
import ReactMarkdown from "react-markdown"
import { SponsoringContractForm } from "../components/SponsoringContractForm"

const SponsoringPage: React.FC<PageProps> = () => {
    const [hideMarkdown, setHideMarkdown] = useState(false)

    return (
        <Layout>
            {!hideMarkdown && (
                <>
                    <ReactMarkdown
                        children={`
# Wir sind auf der Suche nach weiteren Sponsoren

Wir sind auf der Suche nach Sponsoren, die unsere Veranstaltung finanziell unterstützen möchten.

Wenn Sie unsere Vision teilen, unterstützen Sie uns! Das eingeworbene Geld wird vollständig für die 
Organisation des Hackathons sowie die Finanzierung von Preisen für die Teilnehmenden verwendet.

**In kürze folgt am Ende dieser Seite ein Anfrageformular für das Sponsoring. 
Melden Sie sich bei Interesse oder Fragen gerne bereits jetzt unter [hackathon@digitale-oberlausitz.eu](mailto:hackathon@digitale-oberlausitz.eu)**

## Bronze-Paket  (256 Euro)

- Nennung als Veranstaltungsparter auf Social-Media-Auftritten des Vereins
- Flyer/Info-Material als Beigabe zu Infobeuteln für Teilnehmende
- Erwähnung mit Logo auf Hackathon-Website
- Erwähnung als Veranstaltungspartner durch uns bei Eröffnungsveranstaltung
- kleines Logo auf Sponsoren-Poster oder digitaler Sponsoren-Präsentation
- Erwähnung mit Logo auf Werbe-Plakat (zeitlich befristed bis 31.08.2024)

## Silber-Paket (512 Euro)
- alles aus Bronze-Paket
- Zugang zu Job-Wall (Pinnwand) bei der Veranstaltung
- Aufhängen von eigenen Plakaten (in Abstimmung mit uns)
- mittleres Logo auf Sponsoren-Poster oder digitaler Sponsoren-Präsentation
- Trailer/Poster auf Bildschirm-Wand im Durchlauf

## Gold-Paket (1024 Euro)
- alles aus Silber-Paket
- Sponsor kann sich auf Eröffnungsveranstaltung selbst vorstellen (5 Min)
- stellen eines Jury-Mitglieds (Details des Jury-Prozesses folgen)
- Zitat/Grußwort auf der Website (begrenzte Zeichenzahl, Foto von Personen + Logo möglich, Darstellung im Stile von Testimonials)
- aufstellen eines Rollups (muss von Sponsor bereitgestellt werden)
- großes Logo auf Sponsoring-Poster oder digitaler Sponsoren-Präsentation
            `}
                    />
                </>
            )}
            <SponsoringContractForm onShowResultPage={setHideMarkdown} />
        </Layout>
    )
}

export default SponsoringPage

export const Head: HeadFC = () => <title>Sponsoring</title>
