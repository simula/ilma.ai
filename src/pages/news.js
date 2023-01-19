import Image from 'next/image'
export default function News() {
    return (
        <>
            <section>
                <div className="flex justify-center">
                    <Image
                        width={674}
                        height={337}
                        h
                        src="/images/team.jpg"
                        alt="research team"
                    />
                </div>
                <h1 className="my-4 text-3xl font-bold">News articles</h1>
            </section>
            <section className="post-header">
                <p className="my-3">
                    <h2 className="text-2xl font-bold">
                        <a href="https://www.sciencefocus.com/comment/how-to-create-a-realistic-virtual-child-and-why-you-might-want-to/">
                            How to create a realistic virtual child (and why you
                            might want to)
                        </a>
                    </h2>
                </p>

                <p className="my-3">
                    &quot;Criminal psychologists and computer scientists are
                    using virtual avatars to train people how to interview
                    vulnerable children.&quot;
                </p>
                <p className="my-3">&nbsp;</p>

                <p className="my-3">
                    <h2 className="text-2xl font-bold">
                        <a href="https://www.oslomet.no/forskning/forskningsnyheter/kunstig-intelligens-avhor">
                            Vil bruke kunstig intelligens til å øve på
                            barneavhør
                        </a>
                    </h2>
                </p>
                <p className="my-3">
                    &quot;Kunstig intelligens tas i bruk når forskere og
                    eksperter på barneavhør utvikler nye øvingsmetoder for
                    politiet og barnevernet.&quot;
                </p>
                <p className="my-3">&nbsp;</p>

                <p className="my-3">
                    <h2 className="text-2xl font-bold">
                        <a href="https://forskning.no/barn-og-ungdom-kunstig-intelligens-oslomet/forskere-utvikler-ny-ovingsmetode-for-barneavhor/1917575">
                            Forskere utvikler ny øvingsmetode for barneavhør
                        </a>
                    </h2>
                </p>
                <p className="my-3">
                    &quot;Metoden er basert på kunstig intelligens.&quot;
                </p>
                <p className="my-3">&nbsp;</p>

                <p className="my-3">
                    <h2 className="text-2xl font-bold">
                        <a href="https://www.nrk.no/norge/norsk-politi-seier-nei-til-banebrytande-overgreps-forsking-1.15681084">
                            Norsk politi seier nei til banebrytande
                            overgreps-forsking
                        </a>
                    </h2>
                </p>

                <p className="my-3">
                    &quot;Kvaliteten på avhøyr av overgrepsutsette barn er
                    framleis ikkje god nok i Noreg, meiner forskarar. Likevel
                    vil ikkje politiet vere med på å utvikle ny teknologi som
                    kan gjere dei verdsleiande i avhøyrsteknikk.&quot;
                </p>
            </section>
        </>
    )
}
