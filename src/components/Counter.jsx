import {useState} from 'react'
export function Counter(){
    console.log('renderizou')
    const [count,setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  return (
    <section className="flex justify-center items-center">
      <div className="flex items-center flex-col gap-4">
        <h1 className="text-4xl">Contador</h1>
        <div id="display-counter" className="text-4xl">
          {count}
        </div>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
    </section>
  );
}