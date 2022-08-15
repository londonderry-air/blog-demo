import { useEffect, useState } from "react";
import { Box } from "../components/atoms/box/common";
import { FlexBox } from "../components/atoms/box/flex";
import { ColorBox } from "../components/atoms/box/color";
import { Word } from "../components/atoms/text/common";
import { CsrBlogList } from "../components/organisms/csr-list";
import useMediaQuery from "../hooks/useMediaQuery";
import { headState, transitionState } from "../utils/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Post } from "../hooks/usePost";
import { FramerBox } from "../components/atoms/box/framer";
import { useRouter } from "next/router";
import { usePost } from "../hooks/usePost";
import { Loading } from "../components/atoms/loading/common";

export const Page = () => {
  const router = useRouter();
  const isMQ = useMediaQuery();
  const [isShow, setShow] = useState(false);
  const isTransitioning = useRecoilValue(transitionState);
  const setHead = useSetRecoilState(headState);
  const posts = usePost({ category: "csr" });

  useEffect(() => {
    if (!isTransitioning) {
      setShow(true);
      setHead({ title: "CSR BLOG | Tayori Demo", ogImage: "./dog.png" });
    }
  }, [isTransitioning]);

  return (
    <FramerBox>
      <Loading isVisible={posts.length === 0} />
      <ColorBox
        width={"100%"}
        height={"100%"}
        opacity={isShow ? 1 : 0}
        transition={0.5}
      >
        <FlexBox
          way={isMQ ? "column" : "row"}
          width={"100%"}
          height={"100%"}
          position={"relative"}
        >
          <Box
            width={isMQ ? "100%" : "100%"}
            height={isMQ ? "auto" : "100%"}
            position={"relative"}
            shrink={"0"}
            overflowY={"scroll"}
          >
            <Box
              width={"100%"}
              height={"auto"}
              position={isMQ ? "relative" : "absolute"}
              padding={"4em 2em"}
            >
              {posts && <CsrBlogList posts={posts} />}
            </Box>
          </Box>
        </FlexBox>
      </ColorBox>
    </FramerBox>
  );
};

export default Page;
