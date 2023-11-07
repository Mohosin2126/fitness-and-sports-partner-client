
import Banner from '../../Components/Banner/Banner';
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
        </div>
    );
};

export default Home;