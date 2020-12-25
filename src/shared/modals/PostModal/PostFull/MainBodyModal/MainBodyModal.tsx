import React from 'react';
import styles from './mainbodymodal.css';
import {Break} from "../../../../supportingComponents/Break";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../Store/initialState";
import {IPost} from "../../../../../Store/Posts/postsActions";

export function MainBodyModal() {
  const post = useSelector<IInitialState, IPost>(state => state.postModal);

  return (
    <div className={styles.container}>
      {/*<p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.*/}
      {/*</p>*/}
      <div className={styles.imgItem} style={{paddingTop:'30px'}}>
        <img
          src={post.url.includes('jpg'||'png') ? post.url : post.thumbnail ? post.thumbnail : "https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"}
          alt="picture"
        />
        {/*<span className={styles.subText}>Учитывая ключевые сценарии поведения, социально-экономическое развитие играет определяющее значение</span>*/}
      </div>
      {/*<p>Безусловно, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно.*/}
      {/*</p>*/}
      {/*<div className={styles.img2xContainer}>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Господа, высококачественный прототип будущего проекта играет определяющее значение для как самодостаточных, так и внешне зависимых концептуальных решений.</span>*/}
      {/*  </div>*/}
      {/*  <Break size={20}/>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Принимая во внимание показатели успешности, разбор внешних противодействий обеспечивает актуальность форм воздействия.</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<p>Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы. Также как существующая теория в значительной степени обусловливает важность благоприятных перспектив. Для современного мира консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями!*/}
      {/*</p>*/}
      {/*<div className={styles.img3xContainer}>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Таким образом, разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль</span>*/}
      {/*  </div>*/}
      {/*  <Break size={20}/>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Не следует, однако, забывать, что глубокий уровень способствует.</span>*/}
      {/*  </div>*/}
      {/*  <Break size={20}/>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Но сторонники тоталитаризма в науке, инициированные исключительно.</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<p>Вот вам яркий пример современных тенденций - постоянный количественный рост и сфера нашей активности обеспечивает актуальность глубокомысленных рассуждений! Не следует, однако, забывать, что высококачественный прототип будущего проекта предполагает независимые способы реализации дальнейших направлений развития.*/}
      {/*</p>*/}
      {/*<div className={styles.img2xContainer}>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях вывода текущих активов.</span>*/}
      {/*  </div>*/}
      {/*  <Break size={20}/>*/}
      {/*  <div className={styles.imgItem}>*/}
      {/*    <img*/}
      {/*      src="https://www.thepoodisadood.com/wp-content/uploads/2017/01/pojo-placeholder-1.png"*/}
      {/*      alt="picture"*/}
      {/*    />*/}
      {/*    <span className={styles.subText}>Господа, понимание сути ресурсосберегающих технологий обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы!</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );

}
