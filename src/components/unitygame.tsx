import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Box, Center, Button, Flex, Spacer } from "@chakra-ui/react";

export default function UnityGame() {
  const boxRef = React.useRef<HTMLDivElement>(null);

  /*   const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
    streamingAssetsUrl: "StreamingAssets",
  }); */
  /*   

  const scrollon = "auto";

  useEffect(() => {
    const doSomething = () => {};

    window.addEventListener("scroll", doSomething);
    return () => {
      window.removeEventListener("scroll", doSomething);
    };
  }, []); */

  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/build-darkmode.loader.js",
    dataUrl: "Build/build-darkmode.data",
    frameworkUrl: "Build/build-darkmode.framework.js",
    codeUrl: "Build/build-darkmode.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  return (
    <Center flexDirection={"column"}>
      <Box
        ref={boxRef}
        id="webgl-content"
        zIndex={0}
        width="100%"
        maxW="165vh"
        /* pointerEvents={scrollon} */
      >
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
        {/*       </Box>
      <Box w="100%" flexFlow={"row"}> <Button mt="5" onClick={""}> Dark Mode</Button>  */}
      </Box>
    </Center>
  );
}
