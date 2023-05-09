import React, { useEffect, useState, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import {
  Box,
  Center,
  Image,
  Button,
  Flex,
  Spacer,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import data from "./data.json";
import theme from "@/styles/theme";
import ProgressBar from "./progressbar";

interface ParentComponentProps {
  loadingPercentage: number;
}

export default function UnityGame2() {
  const boxRef = React.useRef<HTMLDivElement>(null);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/build-dev.loader.js",
    dataUrl: "Build/build-dev.data",
    frameworkUrl: "Build/build-dev.framework.js",
    codeUrl: "Build/build-dev.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  let unloaded = true;
  const unityRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const loadRef = React.useRef<HTMLDivElement>(null);

  /* useEffect(() => {
    if (
      loadingPercentage > 99 && unloaded) {
      console.log(`Loading ${loadingPercentage}`);
      if (loadRef.current) {
        loadRef.current.style.opacity = "0%";
        loadRef.current.style.transition = "opacity 2s";
        unloaded = false;
      }
    }
  }, [loadingPercentage]); */

  /* PROGRESSBAR */
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (loadRef.current) {
      /* boxRef.current.style.width = '100%'; */
      loadRef.current.style.width = "0px";
      loadRef.current.style.transition = "opacity 2s";
      loadRef.current.style.zIndex = "-5";
    }
  };

  return (
    <AspectRatio
      ratio={16 / 9}
      w="100%"
      bg="#828080"
      id="werte"
      scrollMarginTop={"5vh"}
      position="relative"
    >
      <div
        className="container"
        id="boxRef"
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        {/* {isLoaded === false && ( */}
        <div
          className="loading-overlay"
          ref={loadRef}
          style={{ width: "100%", height: "100%", position: "absolute", zIndex: 5}}
        >
          {/* BG */}
          <Image
            ref={imgRef}
            src="images/loading.png"
            alt="loading"
            height="100%"
            width="100%"
            position="absolute"
            /* opacity={1 - loadingPercentage / 100} */
          />

          {/* PROGRESSBAR */}
          <Box
            position={"absolute"}
            top="70%"
            left="5%"
            id="progRef"
          >
            <Text color="black" my={"15px"}>
              Loading... ({loadingPercentage}%)
            </Text>
            <ProgressBar
              progress={loadingPercentage}
              onClick={handleButtonClick}
            />
          </Box>
        </div>
        {/* )}  */}
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%" }}
        />
      </div>
    </AspectRatio>
  );
}
