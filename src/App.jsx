import Nav from "./components/nav"
import Banner from "./components/banner"
import Card from "./components/card"
import "./components/card.css"

function App() {

  return (
    <>

      <div>
        < Nav />

        <div>
          <Banner />
        </div>

        <div className="card-parent">
          <Card />
          <Card />
          <Card />
        </div>

      </div>



    </>
  )
}

export default App
