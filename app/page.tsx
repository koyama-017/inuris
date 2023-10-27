'use client'

import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const {unityProvider} = useUnityContext({
    // loaderUrl: "/Build/public.loader.js",
    // dataUrl: "/Build/public.data",
    // frameworkUrl: "/Build/public.framework.js",
    // codeUrl: "/Build/public.wasm",                                                                                                                                          
    dataUrl: "/portfolio/Build/portfolio.data",
    frameworkUrl: "/portfolio/Build/portfolio.framework.js",
    loaderUrl: "/portfolio/Build/portfolio.loader.js",
    codeUrl: "/portfolio/Build/portfolio.wasm",  
    // streamingAssetsUrl: "/StreamingAssets"                                                                                                                                        
  })
  return (
      <Unity unityProvider={unityProvider} className="w-[960px] h-[540px] top-1/2 absolute -translate-y-1/2 left-1/2 -translate-x-1/2"/>
  )
}

// 下ボタン押すと一番下までいく


                                                                  