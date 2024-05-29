import ReactGA from "react-ga4";

const initializeGA = () => {
    ReactGA.initialize("G-0B4NF5CK1E");
};

const trackGAEvent = (category: any, action: any, label: string) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
