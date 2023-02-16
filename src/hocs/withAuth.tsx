import { useRouter } from 'next/router'
import { ComponentType, useEffect } from 'react'

const withAuth =
  (Component: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter()

    useEffect(() => {
      if (!localStorage.getItem('accessToken')) {
        router.push('/login')
      }
    }, [])

    return <Component {...props} />
  }

export default withAuth
