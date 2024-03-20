export const NUI = {
    SendAppEvent: function(action: any, data: any) {
        SendNUIMessage({
            action: action,
            data: data,
        });
    },
};