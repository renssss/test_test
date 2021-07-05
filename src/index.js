import ReactDOM from "react-dom";

function Welcome(props) {
	return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;

ReactDOM.render(element, document.getElementById("root"));
