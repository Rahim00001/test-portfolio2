import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    };

    const handleScrolling = () => {
        if (scrollY > 500) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrolling);
        return () => {
            window.removeEventListener("scroll", handleScrolling)
        }
    }, []);
    return (
        <div>
            <button className={`fixed right-4 bottom-4 ${showButton ? "visible" : "invisible"}`}>
                <MdKeyboardDoubleArrowUp onClick={ScrollToTop} className="animate-bounce" size={35} />
            </button>
        </div>
    );
};

export default ScrollToTop;