import four from "../image/c2.jpg"

function Products(){
    return(<div className="sale--image">
    <img src={four} alt="" />
    <div className="sale--image__offer">
      <h2>udemy Flash Sale! 24 hours to save.</h2>
      <p>
        Get the top courses for just 499. just one day to save but a lifetime
        to learn
      </p>
    </div>
  </div>)
}

export default Products