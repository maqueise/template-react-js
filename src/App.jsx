import { Counter } from "./components/Counter";

function App() {
  return (
    <section className="h-screen">
      <h1 className="text-4xl">Lista de Contadores</h1>
      <Counter/>
      <Counter/>
    </section>
  )
}

export default App;
