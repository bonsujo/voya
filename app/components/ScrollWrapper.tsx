import ReactLenis from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";

export const ScrollWrapper = ({children}: {children: ReactNode}) => {
    return(
        <ReactLenis root options = {{lerp: 0.05}}>
            {children}
        </ReactLenis>
    )
}