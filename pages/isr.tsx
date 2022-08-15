import { useEffect, useState } from "react";
import { Box } from "../components/atoms/box/common";
import { FlexBox } from "../components/atoms/box/flex";
import { ColorBox } from "../components/atoms/box/color";
import { IsrBlogList } from "../components/organisms/isr-list";
import useMediaQuery from "../hooks/useMediaQuery";
import { headState, transitionState } from "../utils/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Post } from "../hooks/usePost";
import { FramerBox } from "../components/atoms/box/framer";

export const Page = (props: { posts: Post[] }) => {
  const isMQ = useMediaQuery();
  const [isShow, setShow] = useState(false);
  const isTransitioning = useRecoilValue(transitionState);
  const setHead = useSetRecoilState(headState);

  useEffect(() => {
    if (!isTransitioning) {
      setShow(true);
      setHead({ title: "BLOG | Tayori Demo", ogImage: "./dog.png" });
    }
  }, [isTransitioning]);

  return (
    <FramerBox>
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
              {props.posts && <IsrBlogList posts={props.posts} />}
            </Box>
          </Box>
        </FlexBox>
      </ColorBox>
    </FramerBox>
  );
};

export default Page;

export const getStaticProps = async () => {
  try {
    // const origin = process.env.SOYO_ORIGIN
    const data = await fetch(`${process.env.CMS_ORIGIN}/api/post?category=isr`);
    if (data.status !== 200) {
      return {
        props: {
          posts: [],
        },
        revalidate: 60 * 60 * 24,
      };
    }

    const posts: Post[] = await data.json();

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
      revalidate: 60 * 60 * 24,
    };
  } catch {
    return {
      props: {
        posts: [],
      },
      revalidate: 60 * 60 * 24,
    };
  }
};
