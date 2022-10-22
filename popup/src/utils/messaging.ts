import type * as utilTypes from "../../../common/types/utils";

export const sendMessage = <
    Message extends utilTypes.SendMessageName,
    Data extends utilTypes.SendMessageData[Message],
    Response extends utilTypes.SendMessageResponse[Message]
>(
    name: Message,
    data?: Data
): Promise<Response | undefined> => {
    return new Promise((resolve, reject) => {
        try {
            chrome.runtime.sendMessage({ name, data },
                (response: Response) => resolve(response));
        } catch (error) {
            console.error(`Error sending the message: ${name}`, error);
            reject();
        }
    });
}