import { NUI } from "./NUI"

RegisterNuiCallback("Close", function() {
    NUI.SendAppEvent("setVisible", false)
    SetNuiFocus(false, false)
})