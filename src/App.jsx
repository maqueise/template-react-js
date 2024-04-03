import { Counter } from "./components/Counter";
import { UsersList } from "./components/UsersList";

function App() {
  return (
    <section className="h-screen">
      {/*<h1 className="text-4xl">Lista de Contadores</h1>
        <Counter/>
        <Counter/>*/}
        <h1 className="text-4xl">Lista de Usuários</h1>
        <UsersList/>
    </section>
  )
}

export default App;
