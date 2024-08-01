import './App.css'
import MyCard from './components/MyCard'
import Producto from './components/Producto'


function App() {
  let precio = 250000000000
  return (
    <>
    <h1>{precio}</h1>
    <MyCard title="Leche" desc="Producto lacteo" prize="350" image="https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg"/>
    <div className='grilla'>
      <Producto stock={10} title="Leche" desc="Producto lacteo" prize="350" image="https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg"/>
      <Producto stock={15} title="Harina" desc="Un kilo" prize="550" image="https://chefmart.com.mx/cdn/shop/products/harinaselecta_1000x.jpg?v=1649772116"/>
      <Producto stock={0} title="Huevos" desc="Una docena" prize="150" image="https://content-cocina.lecturas.com/medio/2022/03/01/huevos-blancos-y-rubios_5743d944_1200x1200.jpg"/>
      <Producto stock={1} desc="De cerdo" prize="250" image=""/>

    </div>
    </>
  )
}

export default App
