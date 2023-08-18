import { useState } from "react";

import "./App.css";

const data = [
  "I'm afraid for the calendar. Its days are numbered.",
  "My wife said I should do lunges to stay in shape. That would be a big step forward.",
  "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
  "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
  "What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "How do you follow Will Smith in the snow?You follow the fresh prints.",
  "If April showers bring May flowers, what do May flowers bring?Pilgrims.",
  "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
  "How does dry skin affect you at work? You don’t have any elbow grease to put into it.",
  "What do you call a factory that makes okay products? A satisfactory.",
  "Dear Math, grow up and solve your own problems.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "Have you heard about the chocolate record player? It sounds pretty sweet.",
  "What did the ocean say to the beach?Nothing, it just waved.",
  "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels.",
  "I only know 25 letters of the alphabet. I don't know y.",
  "How does the moon cut his hair?Eclipse it.",
  "What did one wall say to the other?I'll meet you at the corner.",
  "What did the zero say to the eight?That belt looks good on you.",
  "A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop.'",
  "Where do fruits go on vacation?Pear-is!",
  "I asked my dog what's two minus two. He said nothing.",
  "What did Baby Corn say to Mama Corn?Where's Pop Corn?",
  "What's the best thing about Switzerland?I don't know, but the flag is a big plus.",
  "What does a sprinter eat before a race?Nothing, they fast!",
  "Where do you learn to make a banana split?Sundae school.",
  "What has more letters than the alphabet?The post office!",
  "Dad, did you get a haircut?No, I got them all cut!",
  "What do you call a poor Santa Claus?St. Nickel-less.",
];

function App() {
  const [count, setCount] = useState(0);

  const buttonClicked = () => {
    let randomNumber = Math.random() * 10;
    const dataLength = data.length;
    setCount(parseInt(randomNumber));
    // if (RandomNumber < dataLength) {
    //   return setCount[Math.ceil(count + RandomNumber)];
    // }
  };

  return (
    <>
      <div>
        <h1 className="heading">Welcome to the dad Jokes Page</h1>
        <div>
          <p>Click below for your dad joke's dosage lol....</p>
        </div>
      </div>
      <div>
        <button className="button" onClick={buttonClicked}>
          Click Me!!
        </button>
      </div>
      <p className="data-para">{data[count]}</p>
    </>
  );
}

export default App;
