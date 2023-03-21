import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Box, Center } from "@chakra-ui/react";

export default function UnityGame() {
  const boxRef = React.useRef<HTMLDivElement>(null);

  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  return (
    <Center>
    <Box ref={boxRef} zIndex={0}  width="100%" maxW="165vh">
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
      />
    </Box></Center>
  );
};