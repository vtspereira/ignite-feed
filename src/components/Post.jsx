import { Avatar } from './avatar';
import {Comment} from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Vitor Pereira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2025-02-06 21:02:20">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure fugiat facilis, commodi deleniti doloribus obcaecati sapiente exercitationem, excepturi molestiae voluptatibus impedit, maiores alias iusto ut doloremque hic tenetur quis?</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}