import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function AgentsPage() {
  return <></>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}
