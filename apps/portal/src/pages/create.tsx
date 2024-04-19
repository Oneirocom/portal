export default function CreatePage() {
  return <></>
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/templates',
      permanent: false,
    },
  }
}
