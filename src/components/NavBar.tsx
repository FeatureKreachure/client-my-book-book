import Link from "next/link";
import AuthButton from "./molecules/AuthButton";
import ProfileButton from "./molecules/ProfileButton";

const Navbar = () => {
  return (
    <nav className="py-4 bg-black border-b-2 border-white mx-5 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <Link href="/">
            <p className="text-white text-2xl font-semibold cursor-pointer hover:text-teal-400 transition duration-300">
              BOOK-BOOK
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <ProfileButton />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
