import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './avatar';

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/62264055?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Pereira</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{ content }</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir 
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}