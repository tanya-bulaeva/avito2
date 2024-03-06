import { useEffect, useState } from "react"
import { AppRoutes } from "./components/routes/routes"
import { getAds } from "./api/apiAds"

function App() {
    const [ads, setAds] = useState()

    const getAllAds = async () => {
        const response = await getAds()
        setAds(response)
    }

    useEffect(() => {
        getAllAds()
    }, [ads])
    return <AppRoutes />
}

export default App
