export const SendAppEvent = (action?: any, data?: any) => {
    SendNUIMessage({
        action: action,
        data: data,
    });
}