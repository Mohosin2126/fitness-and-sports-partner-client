
const MyBookings = ({booking}) => {
    console.log(booking)
    const{_id,servicename,serviceDescription, price,specialinstruction
,        serviceimage}=booking
    return (
        <div>
 <div className="card card-compact h-96 bg-base-100 shadow-xl">
  <figure><img src={serviceimage} alt="Shoes" className="h-56 w-96" /></figure>
  <div className="card-body">
    <h2 className="card-title">{servicename
}</h2>
    <p>{specialinstruction}</p>
    <div className="card-actions ">
    <button className="btn btn-outline btn-secondary btn-sm ml-4 ">View Detail</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyBookings;