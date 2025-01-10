import { useRef } from "react";
import NavBar from "./components/NavBar";
import OrderForm from "./components/OrderForm";

function App() {
  const orderFormRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div>
      <NavBar
        onNavigate={(section) => {
          if (section === "orderForm") scrollToSection(orderFormRef);
        }}
      />
      <div ref={orderFormRef}>
        <OrderForm />
      </div>
    </div>
  );
}

export default App;
