import { useEffect, useState } from "react";
import {motion} from "framer-motion"

export default function InitialLoader() {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Fallback in case p el is rendered with 100 as the value
        if (loadingPercentage === 100) return;

        const loadingPercentageInterval = setInterval(() => {
            setLoadingPercentage(prevPercentage => {
                const newPercentage = prevPercentage + 1;

                if (newPercentage >= 100) {
                    clearInterval(loadingPercentageInterval);
                    return 100;
                }

                return newPercentage;
            });
        }, 20); // Updating every 28 milliseconds

        return () => clearInterval(loadingPercentageInterval); // Interval cleanup
    }, [loadingPercentage]);

    const fadeIn = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.25
            }
        }
      };

      useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    
        return () => clearTimeout(loaderTimeout);  // Timeout cleanup
    }, []);


      const fadeOut = {
        visible: { opacity: 1},
        hidden: { 
            opacity: 0,
            transition: {
                duration: 0.25
            }
        }
    };

    return (
        <motion.div 
        initial="visible" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={fadeOut}
        >
            <motion.p 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl lg:text-7xl xl:text-8xl text-[#D80101]"
                // className="absolute lg:bottom-5 left-5 top-5 text-5xl lg:text-7xl xl:text-8xl text-[#D80101]"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                {loadingPercentage}%
            </motion.p>
        </motion.div>
    );
}
