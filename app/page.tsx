'use client'

import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const {unityProvider} = useUnityContext({
    // loaderUrl: "/Build/public.loader.js",
    // dataUrl: "/Build/public.data",
    // frameworkUrl: "/Build/public.framework.js",
    // codeUrl: "/Build/public.wasm",                                                                                                                                          
    loaderUrl: "/Build/public.loader.js.br",
    dataUrl: "/Build/public.data.br",
    frameworkUrl: "/Build/public.framework.js.br",
    codeUrl: "/Build/public.wasm.br",                                                                                                                                          
  })
  return (
      <Unity unityProvider={unityProvider} className="w-[960px] h-[540px] top-1/2 absolute -translate-y-1/2 left-1/2 -translate-x-1/2"/>
  )
}

// 下ボタン押すと一番下までいく


                                                                  