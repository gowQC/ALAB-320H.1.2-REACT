export default function Nav(props) {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className={`${props.className1} ${props.className2}`}>
        {props.array.map((item) => {
          return (
            <li key={item}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
