import card from "../css/card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={card.cont}>
        <div className={card.card}>
          <div>{props.m}</div>
          <div>
            {props.loc}
            <span>{props.a}</span>
          </div>
          <div>
            {props.temp}
            <span className={card.bold}>{props.b}</span>
          </div>
          <div>
            {props.weather}
            <span className={card.bold}>{props.c}</span>
          </div>
          <div>{props.d}</div>
          <div>
            {props.season}
            <span className={card.bold}>{props.e}</span>
          </div>
          <div>
            {props.area}
            <span className={card.bold}>{props.f}</span>
          </div>
          <div>
            {props.pro}
            <span className={card.bold}>{props.g}</span>
          </div>
          <div>
            {props.yield}
            <span className={card.bold}>{props.h}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
