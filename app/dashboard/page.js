import Main from "@/components/Main"
import Dashboard from "@/components/Dashboard"
import Login from "@/components/Login"

export const metadata = {
  title: "Broodle ⋅ Dashboard",
  description: "Track your mood here!"
}

export default function DashboardPage() {

  const isAuthenticated = false

  let children = (
    <Login/>
  )

  if (isAuthenticated) {
    children = (
      <Dashboard/>
    )
  }

  return (
    <Main>
      {children}
    </Main>
  )
}