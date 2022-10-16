import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { _id } = router.query

  return <p>Post: {_id}</p>
}

export default Post