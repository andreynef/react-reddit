import * as React from "react";
import styles from './icons.css';

// interface IArrowIconProps {
//   isOpen?: boolean;
// }

export function ArrowIcon() {
  return (
    <>
      {/*{isOpen && (*/}
        <svg className={styles.up} width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0L10 5.46588L9.45862 6L5 1.12595L0.541381 6L0 5.46588L5 0Z"/>
        </svg>
      {/*)}*/}
      {/*{!isOpen && (*/}
      {/*  <svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <path d="M5 0L10 5.46588L9.45862 6L5 1.12595L0.541381 6L0 5.46588L5 0Z"/>*/}
      {/*  </svg>*/}
      {/*)}*/}
    </>
  );
}

