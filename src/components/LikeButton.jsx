import {useState} from 'react'

function LikeButton() {

    const [liked, setLiked] = useState(false)

  return (
    <div>
        <button onClick={() => setLiked(!liked)}>
            {liked ? "❤️ Liked" : "🤍 Like"} 
        </button>

        <p>-----------------------------------------</p>

    </div>
  )
}

export default LikeButton