import App from "./views/app";
import "../styles/styles.scss";
import 'bootstrap/js/dist/modal';

const app = new App();

window.addEventListener("load", () => {
  app.renderPage();
});
