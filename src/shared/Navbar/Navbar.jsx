import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [status, setStatus] = useState(false);

  const navLinks = [
    { text: "About", link: "" },
    { text: "Personal acc.", link: "" },
    { text: "Other acc.", link: "" },
    { text: "Contacts", link: "" },
  ];

  const handleCollapse = () => {
    setStatus(!status);
  };

  return (
    <header className="mt-[10px] py-[14px]">
      <nav className="flex justify-between items-center">
        <h1 className="font-bold">Harini Gomez</h1>

        {status ? (
          <IoMdClose className="md:hidden" onClick={handleCollapse} />
        ) : (
          <RxHamburgerMenu className="md:hidden" onClick={handleCollapse} />
        )}

        <ul className="flex max-md:hidden gap-[20px] lg:gap-[50px] items-center">
          {navLinks.map((navLink, index) => (
            <li key={index}>{navLink.text}</li>
          ))}
        </ul>
      </nav>

      {status && (
        <ul className="flex flex-col gap-1 justify-center mt-3 md:hidden">
          {navLinks.map((navLink, index) => (
            <li key={index} className="px-2 py-2">• {navLink.text}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
