import { SendAppEvent } from "./NUI"

RegisterNuiCallback("App:close", () => {
    SendAppEvent("App:close", null)
    SetNuiFocus(false, false)
})