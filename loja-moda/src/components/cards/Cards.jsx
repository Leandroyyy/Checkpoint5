import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <>
      <span>
        <Link to={props.link}><img src={props.foto} alt={props.alt} /></Link>
        <p>{props.descricao}</p>
      </span>
    </>
  );
}
