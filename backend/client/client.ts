import { NUI } from "./modules/NUI"

import "./modules/Callbacks"

RegisterCommand("open", () => {
	NUI.SendAppEvent("setVisible", true)
	SetNuiFocus(true, true)
}, false)