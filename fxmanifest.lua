fx_version "cerulean"
game "gta5"

lua54 'yes'

author "@justcallme2k"
description "FiveM Typescript React Boilerplate using Vite"

ui_page "build/frontend/index.html"

files {
  "build/frontend/index.html",
  "build/frontend/assets/**",
}

server_scripts {
  "build/backend/server/server.js"
}
client_scripts {
  "build/backend/client/client.js"
}