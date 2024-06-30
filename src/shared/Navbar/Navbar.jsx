const Navbar = () => {
  const navLinks = [
    { text: "About", link: "" },
    { text: "Personal acc.", link: "" },
    { text: "Other acc.", link: "" },
    { text: "Contacts", link: "" },
  ];

  return (
    <header className="py-[14px] h-[60px]">
      <nav className="flex justify-between items-center">
        <h1 className="font-bold">Harini Gomez</h1>

        <ul className="flex gap-[50px] items-center">
          {navLinks.map((navLink, index) => (
            <li key={index}>{navLink.text}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
