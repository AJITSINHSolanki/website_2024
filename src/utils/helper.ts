export const whatsAppShare = (messageTxt: string, phoneNumber: string = "+91 7434000130") => {
    if (isMobile()) {
        // Redirect to WhatsApp app
        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURI(
            messageTxt
        )}`;
    } else {
        // Redirect to WhatsApp Web
        window.open(
            `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURI(
                messageTxt
            )}`,
            "_blank"
        );
    }
};

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};