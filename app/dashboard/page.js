import Main from "@/components/Main"
import Dashboard from "@/components/Dashboard"
import Login from "@/components/Login"
import Loading from "@/components/Loading"
import { useAuth } from "@/context/authContext"

export const metadata = {
  title: "Broodle ⋅ Dashboard",
  description: "Track your mood here!"
}

export default function DashboardPage() {
  return (
    <Main>
      <Dashboard/>
    </Main>
  )
}