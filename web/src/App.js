import "./App.css";
import Layout from "./components/Layout";
import Card from "./components/Layout/Card";
import useJledi from "./components/useJledi";

function App() {
  const { open, handleClose, handleOpen, toggleOpen } = useJledi();

  return (
    <Layout>
      <div className="p-4">
        <Card
          float={false}
          bgColor="bg-gray-500 "
          pic="https://png2.cleanpng.com/sh/999690757b2fb159cc9070d7353ff6b8/L0KzQYm3VMI0N511iZH0aYP2gLBuTfxmaZh6fZ94Zj3vdbjsjvR0NZh3eeJxaXOwdLb6ifdvNZ1qf9d3ZIOwhrbqlP9zNWZmfNZsOUTlSYa4UBY1NmU2TakEMES0QYa5VMQ5PGU3T6g6MEaxgLBu/kisspng-league-of-legends-graphic-design-legends-vector-5addc94b9513f4.4157904115244844276106.png"
        />
        <Card
          float
          bgColor="bg-green-400"
          pic="https://www.pinclipart.com/picdir/big/170-1700831_tristana-from-lol-blue-by-cakesake-league-of.png"
        />
        <Card
          float={false}
          bgColor="bg-blue-400"
          pic="https://png2.cleanpng.com/sh/228fb837adead16ecae96b5519400c53/L0KzQYm3VME6N5xqj5H0aYP2gLBuTfxmaZh6fZ94Zj3vdbjsjvR0NZJ3jJ91ZXHqhba0lvVkfJD3RadqZEi4c7O4UsI4QGc6RqUBMEi3RIe7UcUzPGI3UKs9NUG3QYO1kP5o/kisspng-league-of-legends-art-league-vector-5ad85cb1227865.3608446415241289451412.png"
        />
        {/* <Button onClick={handleOpen}>Modal</Button>
        <Modal open={open} handleClose={handleClose} fullScreenMobile /> */}
      </div>
    </Layout>
  );
}

export default App;
