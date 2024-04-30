import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <p className={css.feed}>Total feedback: {totalFeedback}</p>
      <p className={css.feed}>Good: {feedback.good}</p>
      <p className={css.feed}>Neutral: {feedback.neutral}</p>
      <p className={css.feed}>Bad: {feedback.bad}</p>
      <p className={css.feed}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
