import { NUI } from "./NUI"

RegisterNuiCallback("2k:close", function() {
    NUI.SendAppEvent("setVisible", false)
    SetNuiFocus(false, false)
})