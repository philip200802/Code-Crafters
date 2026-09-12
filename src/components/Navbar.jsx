import { CiBrightnessDown } from "react-icons/ci";
import{Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

        
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
            href="#contact"
            aria-label="Contact"
            className="w-4 h-3 items-cemter"
          >
           <CiBrightnessDown color="white" size={"20px"}/>
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;