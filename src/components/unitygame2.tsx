import React, { useEffect, useState, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import {
  Box,useBreakpointValue,
  Image,
  AspectRatio,
  Text,
  Heading
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

  const desktop = useBreakpointValue({ base: false, lg: true });
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/Builds.loader.js",
    dataUrl: "Build/Builds.data",
    frameworkUrl: "Build/Builds.framework.js",
    codeUrl: "Build/Builds.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  let unloaded = true;
  const unityRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const loadRef = React.useRef<HTMLDivElement>(null);
  const progBar = React.useRef<HTMLDivElement>(null);

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
    if (loadRef.current && progBar.current) {
      loadRef.current.style.width = "0px";
      loadRef.current.style.transition = "opacity 5s";
      loadRef.current.style.transitionDelay = "10s";
      progBar.current.style.zIndex = "-5";
    }
  };

  return (

    desktop ? (
    <AspectRatio
      ratio={16 / 9}
      w="100%"
      /* bg="#828080" */
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
          style={{ width: "100%", height: "100%", position: "absolute"}}
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
            ref={progBar}
            position={"absolute"}
            bottom={{base:"10", md:"11%"}}
            left={{base:"10", md:"6%"}}
          >
            <Heading color="#1f1f20" mb={"5"} fontSize={{base: "40", lg: "60"}}>
              Solutions
            </Heading>
            {/* <Text 
              mb="20px">
              visuarte Solutions
            </Text> */}
            {/* <Text color="black" my={"15px"}>
              Loading...
            </Text> */}
            <ProgressBar
              progress={loadingPercentage}
              onClick={handleButtonClick}
            />
          </Box>
        </div>
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%" }}
        />
      </div>
    </AspectRatio>):(
      null
    )
  );
}
