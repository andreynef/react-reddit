import React, {ChangeEvent, useContext, useState} from "react";
import styles from "*.css";
import {Layout} from "../shared/Layout";

// interface ICommentContext {
//   value: string;
//   onChange: (value:string)=>void;
// }

//или

type ICommentContext = {
  value: string;
  onChange: (value:string)=>void;
}

export const commentContext = React.createContext<ICommentContext>({value:'', onChange: ()=>{},})

//---------------компонент где-то там-------------------------------------------------------------------------------

        export function CommentTheory() {
          const {value, onChange} = useContext(commentContext);
          function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
            onChange(event.target.value);
          }

          return (
            <form method={'post'} >
              <textarea className={styles.textContainer2} value={value} onChange={handleChange}/>
            </form>
          );
        }

//---------------provider в App-------------------------------------------------------------------------------

                  function AppComponent() {
                    const [commentValue, setCommentValue] = useState('');
                    const CommentProvider = commentContext.Provider;
                    return (
                      <CommentProvider value={{value:commentValue, onChange: setCommentValue}}>
                        <Layout>
                          <CommentTheory/>
                        </Layout>
                      </CommentProvider>
                    );
                  }
//---------------------------------------------------------------------------------------------------
