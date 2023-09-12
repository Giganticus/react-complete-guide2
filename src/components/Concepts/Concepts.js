import "./Concept.css";
import Concept from "./Concept";

const Concepts = ({concepts}) => {
    return (       
        <ul id="concepts">
            {concepts.map((item) => 
                Concept({image: item.image, description: item.description, title: item.title}))}
        </ul>);
}

export default Concepts;