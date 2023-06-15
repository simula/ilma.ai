import Image from 'next/image'

export default function Home() {
    return (
        <>
            <section>
                <div className="flex justify-center">
                    <Image
                        width={674}
                        height={337}
                        h
                        src="/images/team2.jpg"
                        alt="research team"
                    />
                </div>
                <h1 className="my-4 text-3xl font-bold">
                    Professionals interviewing maltreated children supported via
                    artificial avatars
                </h1>
            </section>

            <section>
                <p className="my-3">
                    The project proposes to develop a new digital
                    interview-training program drawing on expertise in
                    developmental psychology and artificial intelligence
                </p>

                <p className="my-3">
                    Prevention of maltreatment, physical and sexual abuse of
                    children is a significant societal problem and a politically
                    prioritized task. Abuse and maltreatment increase the risk
                    for severe psychological, psychosocial and somatic health
                    problems. Protecting and assisting maltreated children is
                    therefore of high priority for child protective services and
                    law enforcement.
                </p>

                <p className="my-3">
                    These cases are demanding, and the quality of the
                    investigative interviews conducted by the child protective
                    services and the police must be high. However, national and
                    international research show that although both intensive and
                    less intensive training programs for investigative
                    interviewers may impart knowledge about good practice, they
                    have little, if any, effect on the interviewing skills.
                </p>
                <p className="my-3">
                    The project proposes to develop a new digital
                    interview-training program drawing on expertise in
                    developmental psychology and artificial intelligence. The
                    program includes an interactive avatar (a virtual child)
                    that responds like a real child during an interview
                    situation. We will then determine if an interview-training
                    program using realistic, interactive avatars can effectively
                    improve to a consistently high level, the skills of
                    child-welfare and law-enforcement professionals at
                    interviewing maltreated and abused children. We will also
                    investigate whether they maintain these skills over time.
                </p>
                <p className="my-3">
                    The project has the potential to contribute to more
                    efficient and coordinated assistance to children who are
                    victims of maltreatment, violence and sexual abuse. The
                    interactive-learning program, if successfully, will thus
                    significantly lower the interviewer-training costs. However,
                    first and foremost, the project aims to improve the
                    investigative interviewing skills of practitioners tasked
                    with protecting vulnerable children, thereby contributing to
                    the prevention of child abuse and physical violence.
                </p>
            </section>
        </>
    )
}
