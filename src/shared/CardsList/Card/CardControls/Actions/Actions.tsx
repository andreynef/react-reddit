import React from 'react';
import styles from './actions.css';
import {GarbageIcon, RemoveCrossIcon, SaveIcon, ShareIcon, StatisticIcon} from "../../../../Icons";
import {Break} from "../../../../supportingComponents/Break";
import {GraphIcon} from "../../../../Icons/GraphIcon";

const bookmark = 'seen';
const openedThread = "private";

// interface IActionsProps {
//   openedThread: string;
// }

export function Actions() {
  return (
    <div className={styles.actions}>
      {openedThread==="private" ?
        <>{/* либо личный кабинет и его производные*/}

          {/*{bookmark==='myPosts' && (*/}
          {/*  <>*/}
          {/*    <button>*/}
          {/*      <StatisticIcon/>*/}
          {/*    </button>*/}
          {/*    <Break size={14}/>*/}
          {/*    <button>*/}
          {/*      <ShareIcon/>*/}
          {/*    </button>*/}
          {/*    <Break size={14}/>*/}
          {/*    <button>*/}
          {/*      <GarbageIcon/>*/}
          {/*    </button>*/}
          {/*  </>*/}
          {/*)}*/}
          {/*{bookmark==='saved' &&(*/}
          {/*  <>*/}
          {/*    <button>*/}
          {/*      <ShareIcon/>*/}
          {/*    </button>*/}
          {/*    <Break size={14}/>*/}
          {/*    <button>*/}
          {/*      <RemoveCrossIcon/>*/}
          {/*    </button>*/}
          {/*  </>*/}
          {/*)}*/}
          {(bookmark==='seen' || bookmark==='commented') &&(
            <>
              <button>
                <ShareIcon/>
              </button>
              <Break size={14}/>
              <button>
                <SaveIcon/>
              </button>
            </>
          )}

        </>
        :
        <>{/* либо дискуссия*/}
          <button>
            <ShareIcon/>
          </button>
          <Break size={14}/>
          <button>
            <SaveIcon/>
          </button>
        </>
      }
    </div>
  );
}
