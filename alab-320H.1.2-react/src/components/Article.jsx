export default function Article(props) {
  return (
    <article>
      <time dateTime={props.dateTime}>{props.date}</time>
      <h2>{props.title}</h2>
      <img src={props.source} alt={props.alt} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, earum
        aliquam. Porro ipsa sed voluptas nam provident sapiente deserunt illum
        tempora quam voluptates blanditiis, libero quaerat? Delectus porro quos
        aliquam.
      </p>
      <aside>
        <a href="">Continues...</a>
      </aside>
    </article>
  );
}
