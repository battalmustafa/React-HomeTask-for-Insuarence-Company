import { useEffect, useState } from "react";
import OfferList from "./OfferList";
const Home = () => {
  const [offers, setOffers] = useState(null)

  useEffect(() => {
    fetch('https://snetmyapp.herokuapp.com/case1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setOffers(data);
        //console.log(data)
      })
  }, [])

  return (
    <div className="home">
      {offers && <OfferList offers={offers.offerList} />}
    
    
    </div>
  );
}
 
export default Home;