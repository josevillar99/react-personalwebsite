const { useEffect } = require("react");
const { useLocation } = require("react-router");

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null;
}