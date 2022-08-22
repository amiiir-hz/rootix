import React from "react";
import styles from "./footer.module.css";

function Footer (props) {
    return(
        <div className="flex flex-row justify-between">
            <div className="font-medium text-sm leading-6 tracking-tight ml-6 w-30 text-zinc-400">
            © 2022 Hamed Izadi UI. All Rights Reserved. Made with love by Simmmple!
            </div>
            <div className="flex flex-row text-center pr-6 capitalize">
                <div className="font-medium text-sm leading-6 tracking-tight ml-6 w-30 text-zinc-400">
                Marketplace
                </div>
                <div className="font-medium text-sm leading-6 tracking-tight ml-6 w-30 text-zinc-400">
                License
                </div>
                <div className="font-medium text-sm leading-6 tracking-tight ml-6 w-30 text-zinc-400">
                Terms of Use
                </div>
                <div className="font-medium text-sm leading-6 tracking-tight ml-6 w-30 text-zinc-400">
                Blog
                </div>
                
            </div>
            
        </div>
    )
}
export default Footer;
