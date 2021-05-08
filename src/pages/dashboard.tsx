import { GetServerSideProps } from "next"
import React, { useContext, useEffect } from "react"
import { withSSRAuth } from "../../utils/withSSRAuth"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"

export default function Dashboard() {
  const { user, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me').then(response => console.log(response))
  }, [])

  return (
    <>
     <h1>Dashboard: {user?.email}</h1>

     <Can permissions={['metrics.list']}>
        <div>Métricas</div>
     </Can>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')
  console.log(response)

  return {
    props: {}
  }
})