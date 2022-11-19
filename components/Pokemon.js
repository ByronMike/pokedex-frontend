import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function Pokemon(props) {

  // let pokestyle = {};
  // switch (props.type) {
  //   case "grass":
  //     pokestyle = styles.grass;
  //     break;
  //   case "fire":
  //     pokestyle = styles.fire;
  //     break;
  //     case "electric":
  //     pokestyle = styles.electric;
  //     break;
  //     case "ground":
  //     pokestyle = styles.ground;
  //     break;
  //     case "water":
  //     pokestyle = styles.water;
  //     break;
  //     case "rock":
  //     pokestyle = styles.rock;
  //     break;
  //     case "fairy":
  //     pokestyle = styles.fairy;
  //     break;
  //     case "poison":
  //     pokestyle = styles.poison;
  //     break;
  //     case "bug":
  //     pokestyle = styles.bug;
  //     break;
  //     case "dragon":
  //     pokestyle = styles.dragon;
  //     break;
  //     case "psychic":
  //     pokestyle = styles.psychic;
  //     break;
  //     case "flying":
  //     pokestyle = styles.flying;
  //     break;
  //     case "fighting":
  //     pokestyle = styles.fighting;
  //     break;
  //     case "normal":
  //     pokestyle = styles.normal;
  //     break;
  // }


  return (
    // <div className={`${styles.pokemon} ${pokestyle}`}>
      <div className={`${styles.pokemon} ${styles[props.type]}`}>
      <div>
        <div className={styles.imgContainer}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{props.name}</h3>
          <span className={styles.type}>
            Type: <span>{props.type}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
