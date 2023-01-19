import Link from 'next/link'

export default function Layout({ children }, props) {
    return (
        <div className="flex h-screen w-screen flex-col items-center">
            <header className="flex w-full flex-none justify-center bg-gradient-to-b from-[#ff8100] to-[#ffdc00]">
                <div className="flex w-[800px] flex-row justify-around">
                    <nav className="flex flex-col w-full items-center justify-center sm:flex-row sm:justify-between p-4">
                        <div className="hover:text-[#007acc]">
                            <Link href="/">
                                <a>
                                    <h1 className="text-3xl font-bold">Ilma</h1>
                                </a>
                            </Link>
                        </div>
                        <ul className="flex mt-2 sm:mt-0">
                            <li className="mx-3 hover:text-[#007acc]">
                                <Link href="/team">
                                    <a>Team</a>
                                </Link>
                            </li>
                            <li className="mx-3 hover:text-[#007acc]">
                                <Link href="/research">
                                    <a>Research</a>
                                </Link>
                            </li>
                            <li className="mx-3 hover:text-[#007acc]">
                                <Link href="/news">
                                    <a>News</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="m-5 max-w-[800px] flex-1 text-lg">{children}</main>
            <footer className="flex w-full flex-col items-center bg-gradient-to-b from-[#ff8100] to-[#ffdc00] py-4">
                <div className="flex w-[300px] items-center justify-around">
                    <Link href="">
                        <a>
                            <img
                                className="w-[100px]"
                                src="images/logo.png"
                                alt="Oslo-met logo"
                            />
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <img
                                className="w-[100px]"
                                src="images/simula-logo.png"
                                alt="simula-logo"
                            />
                        </a>
                    </Link>
                </div>
                <div>
                    <span>Copyright &copy; 2023</span>
                </div>
            </footer>
        </div>
    )
}
