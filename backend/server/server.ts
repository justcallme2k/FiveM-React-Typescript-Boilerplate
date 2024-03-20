onNet("App:server:prepare", () => {
    emitNet("App:client:prepare", global.source);
});