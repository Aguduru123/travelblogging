import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>A journey is best measured in friends rather than miles.</p>

      <DestinationData
        className="first-des"
        heading="Costa Rica"
        text="From volcanic mountains and verdant rainforests to tumbling waterfalls and miles of stunning shoreline, Costa Rica is a Central American gem. Explore the beaches along the Nicoya Peninsula, hike along Arenal Volcano and spot exotic wildlife (think: river turtles, otters and howler monkeys) in remote Tortuguero National Park. If you're looking for an adrenaline rush, go swimming next to some of the country's waterfalls or zip lining through its rainforests. Then, head back to an eco-luxury all-inclusive resort to unwind. Just make sure you plan a visit during Costa Rica's dry season, which falls between mid-December and April."
        img1="https://travel.usnews.com/dims4/USNEWS/8efd5df/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fla_paz_main_getty_tr98GOQ.jpg"
        img2="https://travel.usnews.com/dims4/USNEWS/8232815/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fexploring_1_-_tortuguero_national_park_kzbYHtP.jpg"
      />

      <DestinationData
        className="first-des-reverse"
        heading="South Island"
        text="New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National Park from hiking trails or a boat on Milford Sound/Piopiotahi. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee jumpers), sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealand's most accessible glaciers – Franz Josef and Fox Glacier – on the island's west coast"
        img1="https://travel.usnews.com/dims4/USNEWS/942a90f/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FMiles_HoldenCourtesy_of_Tourism_New_Zealand.jpg"
        img2="https://travel.usnews.com/dims4/USNEWS/a5f9ba3/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FjfoltynGetty_Images.jpg"
      />
    </div>
  );
};

export default Destination;
