import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const FramerBox = (props: {
  children: React.ReactNode;
  width?: string;
  height?: string;
}) => {
  // idによる同画面の遷移はアニメーションをしない
  return (
    <motion.div
      style={{ width: props.width ?? "100%", height: props.height ?? "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
};

// idによる同画面の遷移もアニメーションをするボックス
export const FramerInnerBox = (props: {
  href: string;
  isInit?: boolean;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  // #がない = ページ内遷移でない かつ 初期表示指定のある画面は表示する
  const isTransitionFromOtherPage =
    router.asPath.split("#").length === 1 && props.isInit;
  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      initial={{ opacity: 0 }}
      animate={{
        opacity:
          router.asPath === props.href || isTransitionFromOtherPage ? 1 : 0,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0,
        easings: ["linear"],
      }}
    >
      {props.children}
    </motion.div>
  );
};
