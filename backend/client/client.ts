import { SendAppEvent } from "./modules/NUI"

import "./modules/Callbacks"

RegisterCommand("open", () => {
	emitNet("App:server:prepare", global.source)
}, false)

onNet("App:client:prepare", () =>{
	SendAppEvent("App:open", null)
	SetNuiFocus(true, true)
})