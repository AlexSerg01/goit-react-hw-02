import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

export default function App() {
  const feedbacks = {
    good: 0,
    neutrol: 0,
    bad: 0,
  };

  const [clicks, setClicks] = useState(() => {
    return feedbacks;
  });

  function updateFeedback(event) {
    // Тут використовуй сеттер, щоб оновити стан
    if (event.target.id === "good") {
      setClicks({ ...clicks, good: clicks.good + 1 });
    }
  }

  return (
    <>
      <Description />
      <Options handleClick={updateFeedback} />
      <Feedback good={feedbacks.good} neutral={0} bad={0} />
    </>
  );
}
