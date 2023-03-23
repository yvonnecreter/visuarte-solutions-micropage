import { createIcon, IconProps } from "@chakra-ui/react";
import React from "react";

export default function CIcon() {
    const [CustomIcon, setCustomIcon] = React.useState<React.ComponentType<IconProps> | null>(null);
    const src = "../components/test.svg";

    React.useEffect(() => {
        fetch(src)
            .then((response) => response.text())
            .then((svgFile) => {
                // Extract all path elements from the SVG file
                const paths = svgFile.match(/<path[^>]*>/g);

                // Create a new Icon component using createIcon utility
                const CustomIcon = createIcon({
                    displayName: "CustomIcon",
                    viewBox: "0 0 200 200",
                    path: (
                        <>
                            {paths &&
                                paths.map((path, i) => {
                                    const match = path.match(/d="([^"]*)"/);
                                    if (match) {
                                        const d = match[1];
                                        return <path key={i} d={d} />;
                                    }
                                })}
                        </>
                    ),
                });

                setCustomIcon(() => CustomIcon);
            });
    }, []);

    if (!CustomIcon) return null;
 
    return <CustomIcon />;
}