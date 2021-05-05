import { Button, Flex, Input } from "@chakra-ui/react"
import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <Flex align="center" justify="center" w="100vw" h="100vh" direction="column">
      <Flex as="form" onSubmit={handleSubmit} w="100%" maxW="300" direction="column">
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} my="4"/>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit" mt="7" size="lg" colorScheme="blue">Sign In</Button>
      </Flex>
    </Flex>
  )
}
