import {Button} from "react-bootstrap";

export function full(){
    if (!document.fullscreenElement)
    {
        document.getElementById("section").requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }

}

export default function Aktualne_opatrenia() {
    return (

        <div className="container">

            <h1>Aktuálne opatrenia</h1>
            <hr/>
            <div>
                <h2>Najdôležitejšie zmeny od 11. októbra</h2>
                <div>
                    <p>
                        <ul>
                            <li>Medzi kompletne zaočkované osoby sa pre potreby vyhlášky považujú <strong>deti
                                do 12 rokov a 2
                                mesiacov veku</strong>. (Vysvetlenie: lehota bola stanovená tak, aby osobe vo
                                veku 12 rokov po
                                očkovaní uplynul potrebný čas, pri ktorom je predpoklad, že sa v tele stihne
                                vytvoriť dostatočná
                                hladina ochranných protilátok.)
                            </li>
                            <li>
                                <strong>Hodiny vyhradené pre seniorov a ŤZP sa po novom rušia.</strong> Doteraz
                                bolo potrebné, aby
                                seniorské hodiny vyčlenili prevádzky v bordových a čiernych okresoch v režime
                                “základ”.
                            </li>
                            <li>
                                <strong>Explicitne sa uvádza, že pri vstupe do prevádzky je povinné zvoliť si
                                    režim, mať o tom na
                                    viditeľnom mieste oznámenie a zabezpečiť vstup do priestorov len účastníkom
                                    v zvolenom režime
                                    (základ, OTP, kompletne zaočkovaní).</strong> Režim, v ktorom prevádzka
                                funguje, musí viditeľne
                                vyznačiť vo svojich priestoroch. Organizátor hromadného podujatia takisto musí
                                pri vstupe viditeľne
                                označiť, ktorým osobám umožní vstup.
                            </li>
                            <li>
                                <strong>Režim (základ, OTP, kompletne zaočkovaní) na vstupe do prevádzky si nie
                                    sú povinné označiť
                                    esenciálne prevádzky a služby.</strong> Ide napríklad o potraviny, drogérie,
                                lekárne, očné
                                optiky a predajne zdravotníckych pomôcok, kúpele poskytujúce procedúry na
                                základe návrhu lekára,
                                predajne novín a tlačovín, predajne s krmivom pre zvieratá a veterinárne
                                ambulancie, knižnice,
                                čerpacie stanice, opravovne a servis elektroniky strojov, služby STK a emisnej
                                kontroly a podobne.
                            </li>
                            <li>
                                <strong>Pre zhoršujúcu sa epidemiologickú situáciu sa explicitne zakazuje
                                    kombinovanie rôznych
                                    režimov pre jedno hromadné podujatie.</strong>
                            </li>
                        </ul>
                    </p>
                    <h3> Definícia plne očkovanej osoby</h3>
                    <p>Za plne očkovanú osobu sa považuje:
                        <ul>
                            <li>
                                osoba najmenej 14 dní po aplikácii druhej dávky očkovacej látky proti
                                ochoreniu COVID-19 s
                                dvojdávkovou schémou, alebo
                            </li>
                            <li>
                                osoba najmenej 21 dní po aplikácii prvej dávky očkovacej látky proti
                                ochoreniu COVID-19 s
                                jednodávkovou schémou, alebo
                            </li>
                            <li>
                                osoba najmenej 14 dní po aplikácii prvej dávky očkovacej látky proti
                                ochoreniu COVID-19, ak bola
                                prvá dávka očkovania proti ochoreniu COVID-19 podaná v intervale do 180 dní
                                od prekonania ochorenia
                                COVID19, alebo
                            </li>
                            <li>
                                osoba do 12 rokov a dvoch mesiacov veku.
                            </li>
                        </ul>

                        <h3>Definícia osoby v režime OTP</h3>
                        <p>Za osobu v režime očkovaná, testovaná, alebo prekonala ochorenie COVID-19 (ďalej
                            len „ osoba v režime
                            OTP“) sa považuje:</p>
                        <ul>
                            <li>
                                osoba plne očkovaná,
                            </li>
                            <li>
                                osoba, ktorá je schopná sa preukázať negatívnym výsledkom testu na ochorenie
                                COVID-19 nie starším
                                ako 72 hodín od odberu v prípade RT-PCR alebo LAMP testu alebo 48 hodín od
                                odberu v prípade
                                antigénového testu, alebo
                            </li>
                            <li>
                                osoba prekonala ochorenie COVID-19 v období pred nie viac ako 180 dňami.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <section id="section">
                <Button variant="primary" id="fullScreen"
                        onClick={full}>
                    Zväčšiť/Zmenšiť
                </Button>
                <iframe id="map" src="https://datawrapper.dwcdn.net/5i1e9/1/"></iframe>
            </section>

        </div>


    );
}