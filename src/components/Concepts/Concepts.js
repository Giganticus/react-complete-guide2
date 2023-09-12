import "./Concept.css";
import Card from "../UI/Card";
import Header from "./Header";
import Concept from "./Concept";

const Concepts = (props) => {
    return (<Card>
        <Header></Header>
        <ul id="concepts">
            {props.concepts.map((item) => Concept({image: item.image, description: item.description, title: item.title}))}
        </ul>
    </Card>);
}

export default Concepts;