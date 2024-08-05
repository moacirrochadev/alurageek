import { Header } from "./components/Header";
import { MyProduct } from "./components/MyProduct";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center">
        <div className="w-[1380px] h-[1235px] flex items-start justify-center my-8">
          {/**ÁREA MEU PRODUTOS */}
          <MyProduct />
          {/**FORM PARA ADICIONAR PRODUTOS */}
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
