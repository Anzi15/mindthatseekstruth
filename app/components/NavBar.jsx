    
import Link from "next/link.js";

function Navbar({ links }) {
  return (
    <div className="hidden lg:flex items-center gap-8  justify-center  ">
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.href} className="hover:underline underline-offset-2 flex-wrap-none">
            {link.name}
          </Link>
        );
      })}
      
    </div>
  );
}

export default Navbar;