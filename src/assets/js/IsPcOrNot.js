export class IsPcOrNot {
    constructor() {
    }

    static get = () => {
        let ua = window.navigator.userAgent.toLocaleLowerCase();
        console.log(ua)
        if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod') || ua.includes('android')) {
            return false;
        } else {
            return true;
        }
    }
}

export default IsPcOrNot;
