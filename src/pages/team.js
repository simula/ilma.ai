import Card from '../components/Card'
import { FaEnvelope, FaPhoneAlt, FaLandmark } from 'react-icons/fa'

export default function Team() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="w-full rounded-xl"
                            src="images/gunn.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Gunn Astrid Baugerud
                            </h3>
                            <h4>Associate Professor</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:Gunn-Astrid.Baugerud@oslomet.no">
                                    Email me
                                </a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+47480317838">+47 480 31 7838</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+4767238398">+47 67 23 83 98 </a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a
                                    href="https://www.oslomet.no/en/about/employee/gunnba/"
                                    target="_blank" rel="noreferrer"
                                >
                                    Oslo MET directory
                                </a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/michaelr.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Michael Riegler
                            </h3>
                            <h4>Research Professor</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:michael@simula.no">
                                    Email me
                                </a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+47480317838">+47 480 31 7838</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.simula.no/people/michael" target="_blank" rel="noreferrer">Simula directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/mirsin.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Miriam Sinkerud Johnson
                            </h3>
                            <h4>Associate Professor</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:Miriam.Sinkerud-Johnson@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+4767236040">+47 67 23 60 40 </a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/en/about/employee/mirsin/">Oslo MET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/palh.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">Pål Halvorsen</h3>
                            <h4>Professor</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:Pal.Halvorsen@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+4797080007">+47 970 80 007</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/en/about/employee/palh/" target="_blank" rel="noreferrer">Oslo MET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/rar.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Ragnhild Klingenberg Røed
                            </h3>
                            <h4>PhD Candidate</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:Pal.Halvorsen@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+4797080007">+47 970 80 007</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/en/about/employee/palh/" target="_blank" rel="noreferrer">Oslo MET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/lars.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Lars Sokrates Anvil
                            </h3>
                            <h4>Research Assistant</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:Lars.Sokrates.Anvil@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+4767236958">+47 67 23 69 58</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/en/about/employee/larssokr/" target="_blank" rel="noreferrer">Oslo MET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/cathrina.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Catharina Sofie Rodenburg Drejer
                            </h3>
                            <h4>PhD Student</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:catharina.drejer@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/om/ansatt/cathar/" target="_blank" rel="noreferrer">Oslo MET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/profile-default-image_2.png"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Syed Zohaib Hassan
                            </h3>
                            <h4>PhD Student</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:catharina.drejer@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.simula.no/people/syed" target="_blank" rel="noreferrer">Simula directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/martine.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Martine Powell
                            </h3>
                            <h4>Professor</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:martine.powell@griffith.edu.au">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+61(0)737355917 ">+61 (0)7 3735 5917 </a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://experts.griffith.edu.au/18876-martine-powell" target="_blank" rel="noreferrer">Griffith University directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/saeed.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Saeed Shafiee Sabet
                            </h3>
                            <h4>Postdoctoral Fellow</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:saeed@simula.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.simula.no/people/saeed" target="_blank" rel="noreferrer">Simula directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/ingvild.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Ingvild Olimb
                            </h3>
                            <h4>Research Assistant</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:s360593@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="+4767236158">+47 67 23 69 44</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/om/ansatt/tinyking/" target="_blank" rel="noreferrer">OsloMET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/michaell.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Michael Lamb
                            </h3>
                            <h4>Psychologist</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://scholar.google.com/citations?user=FLtyq2kAAAAJ&hl=en&oi=sra" target="_blank" rel="noreferrer">Google Scholar</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/pegah.png"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Pegah Salehi
                            </h3>
                            <h4>PhD Student</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:pegah@simula.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+4792097694">+47 920 97 694</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://scholar.google.com/citations?user=0Y4lkuwAAAAJ&hl=en/" target="_blank" rel="noreferrer">Google Scholar</a>
                            </div>
                        </address>
                    </div>
                </Card>
                <Card>
                    <div className="flex h-[230px] items-center p-3 max-w-[300px]">
                        <img
                            className="rounded-xl object-cover"
                            src="images/hay.jpg"
                            alt="Jane"
                        />
                    </div>
                    <div>
                        <div className="mb-4 h-[75px]">
                            <h3 className="text-xl font-bold">
                                Pegah Salehi
                            </h3>
                            <h4>PhD Student</h4>
                        </div>
                        <address>
                            <div className="my-2 flex w-full items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:hayley.ko@oslomet.no">Email me</a>
                            </div>
                            <div className="my-2 flex w-full items-center">
                                <FaLandmark className="mr-2" />
                                <a href="https://www.oslomet.no/om/ansatt/hayleyma/" target="_blank" rel="noreferrer">OsloMET directory</a>
                            </div>
                        </address>
                    </div>
                </Card>
            </div>
        </>
    )
}
