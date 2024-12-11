import Nav from "./Nav";
export default function Footer() {
  const footerArray = [
    "Home",
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
    "Tips",
  ];
  return (
    <footer>
      <Nav
        className1="no-list-style"
        className2="bottom-ul"
        array={footerArray}
      />
      <span class="copyright">&copy;2013 Valet Industries, Inc</span>
    </footer>
  );
}
