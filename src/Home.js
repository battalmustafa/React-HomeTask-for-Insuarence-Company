import { useEffect, useState } from "react";
import OfferList from "./OfferList";
const Home = () => {
  const [offers, setOffers] = useState(null)
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('https://snetmyapp.herokuapp.com/case2')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setOffers(data);
        setIsPending(false);
        //console.log(data)
      })
  }, [])

  return (
    <div className="home">
       { isPending && <div class="d-flex align-items-center">
  <strong>Teklifler Hazırlanıyor...</strong>
  <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div> }
      {offers && <OfferList offers={offers.offerList} />}
    
    
    </div>
  );
}
 
export default Home;
