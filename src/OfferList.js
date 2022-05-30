

const OfferList = ({ offers }) => {
    
  return (
      <div className="offer-list">
        {offers.map(offer => (
          <div className="offer-preview" key={offer.Cash} >
            <div className="container-fluid">
<div className="border row p-2 col p-2 m-1 d-inline-flex p-2">

<div className="col-sm-2  mt-4 mb-4 border-right">
   
    <div className=".d-sm-inline-flex mt-4">
        <img src={offer.ImagePath} className="card-img" alt="."/>
        </div>
        </div>
       
    <div className="col-md-6 mt-4">
    
        <h6 className="card-title">{offer.ProductDesc}</h6>
       <div className="card-text">{offer.FirmName}
       
    
      </div>
    </div>   
    
      
  <div className=" col-sm-4 p-2 ">
    <div className="card-body h-50 d-inline-block d-flex justify-content-end ml-3">
      {(() => {
        if (offer.QuotaInfo.HasDiscount) {
          return (
            <div className="card-body-">

            <p className="card-text">Peşin <del>{offer.Cash}  TL</del></p>

            <h5 className="card-title">{offer.QuotaInfo.PremiumWithDiscount} TL</h5>
            </div>
          )
       
        } else {
          return (
            <h5 className="card-title">{offer.Cash} TL</h5>
          )
        }
      })()}
    </div>

    <div className="card-body">
    {(() => {
        if (offer.SaleClosed) {
          return (
            <a href="#" className="btn btn-outline-primary btn-sm btn-block">TELEFONDA SATIN AL</a>
          )
       
        } else {
          return (
            <a href="#" className="btn btn-primary btn-sm btn-block">SATIN AL</a>
          )
        }
      })()}
      </div>
  </div>
  </div>
  </div>
          </div>
        ))}
      </div>
      
    );
  }
   
  export default OfferList;