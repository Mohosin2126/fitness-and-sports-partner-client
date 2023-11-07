
import moment from "moment/moment";
import { BsCalendar2Date ,BsClockFill,BsFillPersonFill} from "react-icons/bs";

const UpComingEvents = () => {
    const date=moment().format('MMMM Do YYYY');
    const time=moment().format(' h:mm:ss a');
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-semibold font-serif text-center">Upcoming Events </h1>
            <div className="flex w-40 mx-auto mt-4">
                <h1 className="border  w-14"></h1>
                <h1 className="border w-16 border-red-500"></h1>
                <h1 className="border  w-14"></h1>
            </div>
            <div className="grid grid-cols-3 mt-16">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-56" src="https://i.ibb.co/5FrWZWw/wallpapersden-com-blonde-women-weightlifting-1920x1080.jpg" alt="Shoes" /></figure>
  <div>
    <h2 className=" bg-red-400 w-full h-10 text-center font-serif font-extrabold text-white"> Weight Training</h2>
   <div className="flex gap-4 items-center mt-2">
   <BsCalendar2Date/>
   <h1>{date}</h1>
   </div>
   <div className="flex gap-4 items-center mt-2">
   <BsClockFill/>
   <h1>{time}</h1>
   </div>
   <div className="flex gap-4 items-center mt-2">
   <BsFillPersonFill/>
   <h1>shah</h1>
   </div>
    <div className="card-actions mt-5">
    <button className="btn btn-outline btn-sm btn-secondary">View Details</button>
    </div>
  </div>
</div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-56" src="https://i.ibb.co/mRKTz8Y/pngtree-the-body-builder-with-tattoos-posing-for-a-picture-image-2954450.jpg" alt="Shoes" /></figure>
  <div>
    <h2 className=" bg-red-400 w-full h-10 text-center font-serif font-extrabold text-white"> Body Building</h2>
   <div className="flex gap-4 items-center mt-2">
   <BsCalendar2Date/>
   <h1>{date}</h1>
   </div>
   <div className="flex gap-4 items-center mt-2">
   <BsClockFill/>
   <h1>{time}</h1>
   </div>
   <div className="flex gap-4 items-center mt-2">
   <BsFillPersonFill/>
   <h1>shah</h1>
   </div>
    <div className="card-actions mt-5">
    <button className="btn btn-outline btn-sm btn-secondary">View Details</button>
    </div>
  </div>
</div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/PTqF0vQ/gettyimages-149907887.jpg" className="h-56"  alt="Shoes" /></figure>
  <div>
    <h2 className=" bg-red-400 w-full h-10 text-center font-serif font-extrabold text-white"> Basketball Match</h2>
   <div className="flex gap-4 items-center mt-2">
   <BsCalendar2Date/>
   <h1>{date}</h1>
   </div>
   <div className="flex gap-4 items-center mt-2">
   <BsClockFill/>
   <h1>{time}</h1>
   </div>
   <div className="flex gap-4 items-center mt-2">
   <BsFillPersonFill/>
   <h1>shah</h1>
   </div>
    <div className="card-actions mt-5">
    <button className="btn btn-outline btn-sm btn-secondary">View Details</button>
    </div>
  </div>
</div>
        
            </div>
        </div>
    );
};

export default UpComingEvents;