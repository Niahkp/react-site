import '../css/Dinner.css'
import { BaconCheeseburger, MushroomCheeseburger, ChilliCheeseburger, OriginalCheeseburger, 
  HushPuppies, FrenchFries, OnionRings, Coleslaw, RedVelvetCake, Milkshake, PeachCobbler,
  Cheesecake, Water, Pepsi, Lemonade, Sprite, FruitPunch, SweetTea} from '../components/DinnerPage'
const Dinner = () => {
    return (

        <main>
        <h1>Dinner Menu</h1>
        <hr />
        <div className="menu-grid">
        
        <BaconCheeseburger />
        <MushroomCheeseburger />
        <ChilliCheeseburger />
        <OriginalCheeseburger />
        <HushPuppies />
        <FrenchFries />
        <OnionRings />
        <Coleslaw />
        <RedVelvetCake />
        <Milkshake />
        <PeachCobbler />
        <Cheesecake />
        <Water />
        <Pepsi />
        <Lemonade />
        <Sprite />
        <FruitPunch />
        <SweetTea />
        
        </div>
      </main>
    );
};

export default Dinner;