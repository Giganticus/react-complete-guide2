import "./Concept.css";

const Concept = ({image, description, title}) => {
    return (
        <li className="concept">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>);
};

export default Concept;