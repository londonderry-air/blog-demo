import { useRecoilValue, useSetRecoilState } from "recoil";
import { FlexBox } from "../components/atoms/box/flex";
import { FramerBox } from "../components/atoms/box/framer";
import { transitionState, headState } from "../utils/atoms";
import { useEffect, useState } from "react";
import { UpslideSentence } from "../components/atoms/text/upslide";
import { pallet } from "../utils/color";
import useMediaQuery from "../hooks/useMediaQuery";
export const Page = () => {
  const isMQ = useMediaQuery();
  const isTransitioning = useRecoilValue(transitionState);
  const [isLine1Show, setLine1Show] = useState(false);
  const [isLine2Show, setLine2Show] = useState(false);
  const setHead = useSetRecoilState(headState);

  useEffect(() => {
    if (!isTransitioning) {
      setHead({ title: "Tayori Demo", ogImage: "./dog.png" });
      setTimeout(() => setLine1Show(true), 100);
      setTimeout(() => setLine2Show(true), 200);
    }
  }, [isTransitioning]);

  return (
    <FramerBox>
      <FlexBox
        width={"100%"}
        height={"100%"}
        way={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FlexBox
          way={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2em"}
        >
          <UpslideSentence
            size={isMQ ? `12vw` : "6vw"}
            weight={"600"}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={pallet.black}
            v_space={"0.8em"}
            h_space={"0.1em"}
            isShow={isLine1Show}
            deg={"10"}
          >
            HELLO
          </UpslideSentence>
          <UpslideSentence
            size={isMQ ? `12vw` : "6vw"}
            weight={"600"}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={pallet.black}
            v_space={"0.8em"}
            h_space={"0.1em"}
            isShow={isLine2Show}
            deg={"10"}
          >
            TAYORI DEMO
          </UpslideSentence>
        </FlexBox>
      </FlexBox>
    </FramerBox>
  );
};

export default Page;
