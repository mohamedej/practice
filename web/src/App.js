import "./App.css";
import Button from "./components/Button";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import useJledi from "./components/useJledi";

function App() {
  const { open, handleClose, handleOpen, toggleOpen } = useJledi();

  return (
    <Layout>
      <div>
        <Button onClick={handleOpen}>Modal</Button>
        <Modal open={open} handleClose={handleClose} fullScreenMobile />
      </div>
    </Layout>
  );
}

export default App;
