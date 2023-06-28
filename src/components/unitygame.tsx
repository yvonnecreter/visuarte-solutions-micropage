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
import { Button } from "chakra-ui";

interface ParentComponentProps {
  loadingPercentage: number;
}

export default function UnityGame() {
  const boxRef = React.useRef<HTMLDivElement>(null);

  /* MOBILE / DESKTOP */
  const desktop = useBreakpointValue({ base: false, lg: true });

  /* UNITY */
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/Builds.loader.js",
    dataUrl: "Build/Builds.data",
    frameworkUrl: "Build/Builds.framework.js",
    codeUrl: "Build/Builds.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  /* LOADING IN UNITY */
  const loadingPercentage = Math.round(loadingProgression * 100);
  let unloaded = true;
  const unityRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const loadRef = React.useRef<HTMLDivElement>(null);
  const progBar = React.useRef<HTMLDivElement>(null);

  /* CLICK */
  const handleButtonClick = () => {
    if (loadRef.current && progBar.current) {
      loadRef.current.style.transitionDelay = "10s";
      loadRef.current.style.width = "0px";
      loadRef.current.style.transition = "opacity 5s";
      progBar.current.style.zIndex = "-5";
    }
  };

  return (
    desktop ? (
    /* CONTAINER LAYOUT */
    <AspectRatio
      ratio={16 / 9}
      w="100%"
      id="werte"
      scrollMarginTop={"5vh"}
      position="relative"
    >
      <div
        className="container"
        id="boxRef"
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >

        {/* LOADING SCREEN */}
        {/* {isLoaded === false && ( */}
        <div
          className="loading-overlay"
          ref={loadRef}
          style={{ width: "100%", height: "100%", position: "absolute"}}
        >

          {/* BACKGROUND */}
          <Image
            ref={imgRef}
            src="images/loading.png"
            alt="loading"
            height="100%"
            width="100%"
            position="absolute"
            /* opacity={1 - loadingPercentage / 100} */
          />

          {/* LOADING OVERLAY */}
          <Box
            ref={progBar}
            position={"absolute"}
            bottom={{base:"10", md:"11%"}}
            left={{base:"10", md:"6%"}}
          >
            <Heading color="#1f1f20" mb={"5"} fontSize={{base: "40", lg: "60"}}>
              Solutions
            </Heading>
            
            <ProgressBar
              progress={loadingPercentage}
              onClick={handleButtonClick}
            />
          </Box>
        </div>

        {/* UNITY */}
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%" }}
        />
      </div>
    </AspectRatio>):(
      <AspectRatio
      ratio={16 / 9}
      w="100%"
      id="werte"
      scrollMarginTop={"5vh"}
      position="relative">


      <div ref={loadRef}
          style={{ width: "100%", height: "100%", position: "absolute"}}>
      <Image ref={imgRef}
            src="images/Showroom_DarkMode.png"
            alt="loading"
            height="100%"
            width="100%"
            position="absolute"/>

        <Unity className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%" }}
        />
        <Text position={"absolute"} left="0" bottom="0" m="7" mx="5vw" variant="small" color="#e0e0e0" bg="rgba(22,22,22,0.5)" p="1" px="2" borderRadius={"1"}> Auf einem Desktop Monitor siehst Du hier mehr ;) </Text>
      </div>
      </AspectRatio>
            
    )
  );
}
