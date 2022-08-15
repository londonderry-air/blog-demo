import { useState, useEffect } from "react";
import { ColorBox } from "../atoms/box/color";
import { FlexBox } from "../atoms/box/flex";
import { AnimatePresence } from "framer-motion";
import { PortfolioHeader } from "../molucules/header";

export const MainLayout = (props: { children?: React.ReactNode }) => {
  const [isWindowExist, setWindowState] = useState(false);

  useEffect(() => {
    setWindowState(true);
  }, []);

  if (!isWindowExist) {
    return <></>;
  }

  return (
    <ColorBox
      position={"relative"}
      width={"100vw"}
      height={"100vh"}
      transition={0}
      opacity={isWindowExist ? 1 : 0}
    >
      <PortfolioHeader />
      <FlexBox
        way={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100vw"}
        height={"100vh"}
      >
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {props.children}
        </AnimatePresence>
      </FlexBox>
    </ColorBox>
  );
};
