const kotak1 = () => {
  return (
    <>
    <h1>kotak1</h1>
    <kotak1/>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello world</h1>
    <kotak1/>
    </>
  )
}

export default App
