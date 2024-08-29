export const whatsAppShare = (
    messageTxt: string,
    phoneNumber: string = "+91 6356561125"
) => {
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

export const getFooterText = (pathname: string) => {
    let route =
        pathname.split("/").length > 1
            ? pathname.split("/")[1]
            : pathname.split("/")[0];
    ``;

    switch (route) {
        case "":
            return "Call APSTHREEAI at (+91) 635656 61125 for ERP software for healthcare industry, ERP software for pharmaceutical company, cloud based ERP software for pharmaceutical company, ERP software for hospitals.";
        case "services":
            return "Call APSTHREEAI at (+91) 635656 61125 for ERP software for healthcare industry, ERP software for pharmaceutical company, ERP software for hospitals, ERP software for invoice management, ERP software for Billing and invoicing, ERP software for drug researcher company, ERP software development services";
        case "features":
            return "Call APSTHREEAI at (+91) 635656 61125 for ERP software for healthcare industry, ERP software for pharmaceutical company, cloud based ERP software for pharmaceutical company, ERP software for hospitals.";
        case "pricing":
            return "Call APSTHREEAI at (+91) 635656 61125 for IT consultancy to specific healthcare software, Enterprise Resource Planning Software Solutions. Find Best trusted  ERP cloud software for medical store, Pharmaceutical erp software provider in Ahmedabad, Hospital erp software provider in ahmedabad, Medical store ERP software provider in ahmedabad.";
        case "blogs":
            return "Blogs";
        default:
            return "Home";
    }
};
