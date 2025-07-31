import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar rounded-none">
            <Link to="/">
                <p className="text-3xl font-extrabold text-gradient tracking-wide uppercase drop-shadow-sm">
                    ResCheck
                    </p>

            </Link>
            <Link to="/upload" className="rounded-none px-4 py-2 primary-button w-fit inline-flex items-center justify-center transition-all duration-300 hover:primary-gradient-hover focus:outline-none focus:ring-2 focus:ring-yellow-400" aria-label="Upload your resume">
                Upload Resume
            </Link>

        </nav>
    )
}
export default Navbar
