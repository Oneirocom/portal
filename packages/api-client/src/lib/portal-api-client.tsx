import styles from './portal-api-client.module.css'

/* eslint-disable-next-line */
export interface PortalApiClientProps {}

export function PortalApiClient(props: PortalApiClientProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PortalApiClient!</h1>
    </div>
  )
}

export default PortalApiClient
