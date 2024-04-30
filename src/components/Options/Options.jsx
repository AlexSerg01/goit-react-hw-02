import css from "./Options.module.css";

export default function Options(handleClick) {
  return (
    <div className={css.options}>
      <button id="good" className={css.btn} onClick={handleClick}>
        Good
      </button>
      <button id="neutral" className={css.btn}>
        Neutral
      </button>
      <button id="bad" className={css.btn}>
        Bad
      </button>
      <button id="reset" className={css.btn}>
        Reset
      </button>
    </div>
  );
}
