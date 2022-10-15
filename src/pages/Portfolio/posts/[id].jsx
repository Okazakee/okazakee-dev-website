import { useRouter } from 'next/router'

const posts = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

export default posts