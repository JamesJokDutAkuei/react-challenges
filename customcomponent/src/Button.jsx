import App from './App'

export default function Button(props) {
    function handleClick(){
        alert("You clicked on" + " " + props.Button)
    }
    return (
        <button onClick={handleClick}>{props.Button}</button>
    );
}
