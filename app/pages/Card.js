import card from "../css/card.module.css";

const Card = (props) => {
  return (
    <>
    <div className={card.cont}>


      <div className={card.card}>
 

        <div>{props.m}</div>
        <div>
          {props.loc}{props.a}
        </div>
        <div>{props.temp}{props.b}</div>
        <div>{props.weather}{props.c}</div>
        <div>{props.d}</div>
        <div>{props.e}</div>
        <div>{props.f}</div>
        <div>{props.g}</div>
        <div>{props.h}</div>
      </div>
      </div>
    </>
  );
};

export default Card;
