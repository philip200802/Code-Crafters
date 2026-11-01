import { MdDarkMode, MdLightMode } from "react-icons/md";
const Navbar = ({ isLight, onToggleTheme }) => {
  return (
    <nav className="navbar-shell fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 h-14 flex items-center justify-between">

        
        <a
          href="#home"
          className="text-[21px] font-bold tracking-tight text-white"
        >
          Code Crafters.
        </a>

        
        <div className="flex items-center gap-5">

          <a
            href="#projects"
            className="text-[15px] text-white hover:text-white/60 transition-colors"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-[15px] text-white hover:text-white/60 transition-colors"
          >
            About
          </a>

          <a
            href="#experience"
            className="hidden text-[15px] text-white transition-colors hover:text-white/60 sm:inline"
          >
            Experience
          </a>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            {isLight ? <MdDarkMode size="20px" /> : <MdLightMode size="20px" />}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;