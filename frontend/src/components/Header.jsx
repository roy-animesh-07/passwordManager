const Header = () => {
    return (
        <>
            <div className="bg-green-700  flex justify-around p-3">
                <p className="p-2 text-white text-3xl">Password Manager</p>
                <a className="p-2 bg-blue-100 border-2 hover:cursor-pointer flex justify-center items-center" href="https://github.com/roy-animesh-07">
                    <lord-icon
                        src="https://cdn.lordicon.com/jjxzcivr.json"
                        trigger="hover"
                    >
                    </lord-icon>
                    GitHub</a>
            </div>
        </>
    )
}

export default Header;