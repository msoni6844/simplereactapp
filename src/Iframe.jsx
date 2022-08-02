import App from "./App";
function Frame() {
    return (
        <iframe src={App()} frameborder="0"></iframe>
    );
}
export default Frame;