import React from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";
import {EmptyCard} from "./EmptyCard";
import {FaceHmm} from "./FaceHmm";

interface ICardListProps {
}

export function CardListTheory() {

    return (
      <ul className={styles.cardList}>
        <li>card</li>
      </ul>
    )
}
