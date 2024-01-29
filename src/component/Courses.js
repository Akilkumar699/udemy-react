import one from "../image/c1.jpg"
import two from "../image/c3.jpg"
import three from "../image/c4.jpg"

function Courses(){
    return(<div className="recomanded">
      <h1 className="recomanded__title">Recomanded For You</h1>
      <p>Pick the best fit</p>
      <div className="recomanded__container">
        <div className="course-card">
          <img src={one} alt="" />
          <h4>2023 Python Data Visaulisation Materclass</h4>
          <p>Col Steels</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499<del> 999</del></p>
        </div>
        <div className="course-card">
          <img src={two} alt="" />
          <h4>Basic to Advance Programming with EMC</h4>
          <p>Col Steels</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>499<del> 999</del></p>
        </div>
        <div className="course-card">
          <img src={three} alt="" />
          <h4>Web Development Boootcamp 2023</h4>
          <p>Col Steels</p>
          <p>4.7 ⭐⭐⭐⭐</p>
          <p>499<del> 1499</del></p>
        </div>
        <div className="course-card">
          <img src={one} alt="" />
          <h4>Master UI/Ux Designing With Figma</h4>
          <p>Col Steels</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499<del> 777</del></p>
        </div>
      </div>
    </div>)
}

export default Courses