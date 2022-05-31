import { useEffect, useState } from "react";
import OfferList from "./OfferList";
import NumOffers from "./NumOffers";
const Home = () => {
  const [numOffers, setNumOffers] = useState(null)
  const [offers, setOffers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch('https://snetmyapp.herokuapp.com/get_offer_count')
      .then(res => {
        return res.json();
      })
      .then(data => { 
        setNumOffers(data);
        //console.log(data)
      })
      fetch ('https://snetmyapp.herokuapp.com/case3')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setOffers(data);
        setIsPending(false);
       
        console.log(data)
      })
  
    }, [])
  
  
  
 
  return (
    <div className="home">
       { isPending && <div class="d-flex align-items-center">
  <strong>Teklifler Hazırlanıyor...</strong>
  <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div> }
{ numOffers && <div class="d-flex align-items-center">
  <strong>{numOffers.num_offers}adet Teklif Hazırlanıyor...</strong>
  
</div> }  
    {offers && <OfferList offers={offers.offerList} />}

    
    </div>
  );
}
 
export default Home;
