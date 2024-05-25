import logo from '../../assets/images/logo.svg';


const Header = () => {
    return (
        <header className="flex justify-between items-center bg-white text-gray-600 text-lg p-4 border-b-4 border-blue-600">
            <div className="cursor-pointer flex items-center gap-2 text-3xl ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                     stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Retour
            </div>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <button className="flex items-center font-semibold text-xl justify-center bg-blue-600 rounded-md align-middle text-center text-white h-14
            w-40 py-4 cursor-pointer hover:bg-blue-800">
                Investir
            </button>
        </header>
    )
}

export default Header