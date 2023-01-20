import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }, props) {
    return (
        <div className="flex h-screen w-screen flex-col items-center">
            <header className="flex w-full flex-none justify-center bg-gradient-to-b from-[#ff8100] to-[#ffdc00]">
                <div className="flex w-[800px] flex-row justify-around">
                    <nav className="flex w-full flex-col items-center justify-center p-4 sm:flex-row sm:justify-between">
                        <div className="hover:text-[#007acc]">
                            <Link href="/">
                                <h1 className="text-3xl font-bold">Ilma</h1>
                            </Link>
                        </div>
                        <ul className="mt-2 flex sm:mt-0">
                            <li className="mx-3 hover:text-[#007acc]">
                                <Link href="/team">
                                    Team
                                </Link>
                            </li>
                            <li className="mx-3 hover:text-[#007acc]">
                                <Link href="/research">
                                    Research
                                </Link>
                            </li>
                            <li className="mx-3 hover:text-[#007acc]">
                                <Link href="/news">
                                    News
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="m-5 max-w-[800px] flex-1 text-lg">{children}</main>
            <footer className="flex w-full flex-col items-center bg-gradient-to-b from-[#ff8100] to-[#ffdc00] py-4">
                <div className="flex w-[300px] items-center justify-around">
                    <Link href="https://www.oslomet.no/">
                        <Image
                            width={100}
                            height={70}
                            className="w-[100px]"
                            src="/images/logo.png"
                            alt="Oslo-met logo"
                        />
                    </Link>
                    <Link href="https://www.simulamet.no/">
                        <Image
                            width={100}
                            height={25}
                            className="w-[100px]"
                            src="/images/simula-logo.png"
                            alt="simula-logo"
                        />
                    </Link>
                </div>
                <div>
                    <span>Copyright &copy; 2023</span>
                </div>
            </footer>
        </div>
    )
}
