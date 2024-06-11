    import logo from '../../assets/images/logo.svg';


    const Header = () => {
        return (
            <header
                className="sticky top-0 py-2 z-50 shadow-md flex justify-between items-center bg-white text-gray-600 text-sm md:text-lg p-4 font-poppins px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="cursor-pointer flex items-center justify-center gap-2 text-2xl ">
                    <button type="button"
                            className="flex items-center justify-center  px-2 py-2.5 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 w-auto hover:bg-gray-100 text-center me-2 mb-2">
                        <span>
                            <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                            </svg>
                        </span>
                        <span className="hidden md:block">Retour</span>
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <img src={logo} alt="Logo"/>
                </div>
                <button type="button"
                        className="border focus:ring-1 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-yellow-300 text-yellow-300 hover:text-white hover:bg-yellow-400">Investir
                </button>

            </header>
        )
    }

    export default Header