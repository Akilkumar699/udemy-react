import Navbar from "./Navbar"
import Catagorise from "./Catagories"
import Products from "./Products"
import Courses from "./Courses"
import Topics from  "./Topics"
import Popular from "./Popular"
import Footer from "./Footer"

function App(){
    return(<>
        <Navbar></Navbar>
        <Catagorise></Catagorise>
        <Products></Products>
        <Courses></Courses>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
    </>)
}

export default App