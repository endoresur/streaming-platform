import AuthorBlock from 'components/ui/AuthorBlock'
import { Comment } from 'models/entityModels/feed'
import styles from './styles.module.scss'

interface Props {
  comments: Comment[]
}

const Comments = ({ comments }: Props) => {
  return (
    <section>
      {comments.map(comment => (
        <AuthorBlock author={comment.user}>
          <div className={styles.comment}>
            <span className={styles.date}>опубликовано {comment.publicationDate}</span>
            <p className={styles.commentText}>{comment.text}</p>
          </div>
        </AuthorBlock>
      ))}
    </section>
  )
}

export default Comments
