import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import {
  Box,
  Center,
  Button,
  Flex,
  Spacer,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

export default function UnityGame() {
  /* const boxRef = React.useRef<HTMLDivElement>(null); */

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/build-darkmode.loader.js",
    dataUrl: "Build/build-darkmode.data",
    frameworkUrl: "Build/build-darkmode.framework.js",
    codeUrl: "Build/build-darkmode.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <AspectRatio ratio={16 / 9} w="100%" bg="#828080">
      <div className="container">
        {isLoaded === false && (
          <div
            className="loading-overlay"
            style ={{width:"100%",
            height:"100%"}}
          >
            <Text zIndex="5" color="black" m={5}>
              Loading... ({loadingPercentage}%)
            </Text>
          </div>
        )}
        <Unity
          className="unity"
          unityProvider={unityProvider}
          style={{ width: "100%" }}
        />
      </div>
    </AspectRatio>
  );
}
