
import Banner from '../../Components/Banner/Banner';
import Membership from '../../Components/MemberShip/Membership';
import PopularServices from '../../Components/PopularServices/PopularServices';
import Trainer from '../../Components/Trainer/Trainer';
import UpComingEvents from '../../Components/UpComingEvents/UpComingEvents';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularServices></PopularServices>
           <UpComingEvents></UpComingEvents>
           <Trainer></Trainer>
           <Membership></Membership>
        </div>
    );
};

export default Home;