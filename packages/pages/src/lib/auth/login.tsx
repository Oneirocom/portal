import { GetServerSidePropsContext } from 'next'

export default function Login() {
  return <></>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: '/auth/sign-in',
      permanent: false,
    },
  }
}
