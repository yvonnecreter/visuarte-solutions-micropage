import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Box } from "@chakra-ui/react";

function App() {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        let value = window.scrollY;
        if (value > 1500) {
          boxRef.current.style.zIndex = "9998";
          if (value > 2000) {
            boxRef.current.style.position = "absolute";
            boxRef.current.style.top = "2000px";
          } else {
            boxRef.current.style.position = "fixed";
            boxRef.current.style.top = "50px";
          }
        } else {
          boxRef.current.style.zIndex = "0";
          boxRef.current.style.position = "fixed";
          boxRef.current.style.top = "50px";
        }

        if (value > 2000) {
          boxRef.current.style.position = "absolute";
          boxRef.current.style.top = "2000px";
        } else {
          boxRef.current.style.position = "fixed";
          boxRef.current.style.top = "50px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  return (
    <Box ref={boxRef} zIndex={0} top="50px" position="fixed" width="100%">
      {" "}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />{" "}
    </Box>
  );
}

export default App;
