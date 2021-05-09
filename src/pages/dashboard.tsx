import { Button } from "@chakra-ui/button"
import React, { useContext, useEffect } from "react"
import { withSSRAuth } from "../../utils/withSSRAuth"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"

export default function Dashboard() {
  const { user, signOut, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
  }, [])

  return (
    <>
     <h1>Dashboard: {user?.email}</h1>

     <Button onClick={() => signOut()} colorScheme="blue">Sign out</Button>

     <Can permissions={['metrics.list']}>
        <div>Métricas</div>
     </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')

  return {
    props: {}
  }
})