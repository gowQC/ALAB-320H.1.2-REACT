import Nav from "./Nav";
export default function Header() {
  const headerArray = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
  ];
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav className1="no-list-style" className2="top-ul" array={headerArray} />
    </header>
  );
}
