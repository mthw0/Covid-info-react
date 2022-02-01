import {Accordion, Button} from "react-bootstrap";

export default function Ockovanie() {
    return (
        <div className="container">

            <h1>Kto a kedy sa bude môcť dať zaočkovať?</h1>
            <hr/>
            <p>
                <Button href="" variant="primary">Požiadať o očkovanie</Button>
            </p>
            <p>
                <Button href="" variant="outline-primary">Kontrola objednavky</Button>
            </p>

            <p>
                Požiadať o očkovanie môžu všetci, ktorí patria do aktuálne otvorenej fázy a taktiež tí, ktorí patria do
                predchádzajúcich fáz očkovania.
            </p>
            <p>
                <strong>Napríklad:</strong> Je otvorená 3. fáza a ja patrím do 1. fázy, môžem teda požiadať o očkovanie.
                Ak by
                som bol napríklad v 5. fáze, zatiaľ nemôžem požiadať o očkovanie.
            </p>
            <h3>Čo ak sa očkovanie ľudia nedostavili? </h3>
            <p>Ak sa na očkovanie v daný deň nedostavili všetky riadne objednané osoby (t.j. objednané cez centrálny
                objednávkový systém), môže poskytovateľ podať zvyšné dávky osobám, ktorým sa v príslušnom zdravotníckom
                zariadení poskytuje ústavná zdravotná starostlivosť. Tieto osoby však musia spĺňať jednu z týchto dvoch
                podmienok:
                <br/>– dosahujú vek minimálne 65 rokov,
                <br/>– patria medzi osoby s ochorením podľa 5. fázy. </p>
            <p>
                Ak zvyšnú dávku nemôže podať týmto osobám, môže ju podať aj tým, ktorým neposkytuje zdravotnú
                starostlivosť v
                príslušnom zariadení, stále však platí, že očkované osoby musia:
                <br/>– dosahovať vek minimálne 65 rokov, alebo
                <br/>– patria medzi osoby s ochorením podľa 5. fázy
            </p>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Fáza č.1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Fáza č.2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
}