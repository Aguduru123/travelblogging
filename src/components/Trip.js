import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://travel.usnews.com/dims4/USNEWS/172d003/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FBattery_Park_aerial_Eloi_Omella_Getty_bWpRojp.jpg"
          heading="New York City"
          text="New York City hosts infinite urban adventures: You can wander through Central Park, tour art exhibits at The Metropolitan Museum of Art, catch a classic New York Broadway show or peruse SoHo's stylish boutiques. At night, admire Manhattan's glittering skyscrapers from the top of the Empire State Building or the rooftop bar of a trendy boutique hotel. Foodies will also appreciate New York's endless restaurant options and commendable number of Michelin stars. If you want to sample a bit of everything, sign up for a food tour."
        />
        <TripData
          image="https://travel.usnews.com/dims4/USNEWS/e9e127c/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fjimbaran_beach_sunset_getty_hadi_zaher_tP9akHj.jpg"
          heading="Bali"
          text="Serene temples and beautiful beaches are the biggest draws to this lush Indonesian paradise. And we do mean lush – the region's notoriously soggy wet season is best avoided by planning a visit between April and October. Break up your beach time with a visit to the village of Kintamani, home to a towering (and active) volcano, as well as a large lake. If you're craving an adrenaline rush, hop on one of Bali's many swings to soar above rice terraces and jungles. Meanwhile, foodies can whip up some nasi goreng during a Balinese cooking class"
        />
        <TripData
          image="https://travel.usnews.com/dims4/USNEWS/44886ac/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fgettyimages-482151882_hA4PCda.jpg"
          heading="London"
          text="London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast. Once you've seen the major sights, stroll through the posh streets of Mayfair or Chelsea, or admire the gardens at one of London's 3,000 parks."
        />
      </div>
    </div>
  );
}

export default Trip;
