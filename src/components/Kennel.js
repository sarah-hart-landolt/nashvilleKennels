import React, { useState } from "react"
import {Dashboard} from "./Dashboard"
import Auth from "./auth/Auth"

export const Kennel = () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("kennel_customer") ? <Dashboard /> : <Auth toggle={toggle} />
    )
}