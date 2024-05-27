// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogsItemDetails

  return (
    <li className="list-item">
      <Link className="link" to={`/blogs/${id}`}>
        <div className="container4">
          <img src={imageUrl} className="image1" alt={`item${id}`} />
          <div className="container">
            <p className="paragraph">{topic}</p>
            <h1 className="heading">{title}</h1>
            <div className="mini-container">
              <img src={avatarUrl} className="image2" alt={`avatar${id}`} />
              <p className="paragraph2">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
