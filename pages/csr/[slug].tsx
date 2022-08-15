import { useEffect, useState } from "react";
import { Box } from "../../components/atoms/box/common";
import { FlexBox } from "../../components/atoms/box/flex";
import { TransformBox } from "../../components/atoms/box/transform";
import { Post } from "../../hooks/usePost";
import { _Image } from "../../components/atoms/image/common";
import { BlogArticle } from "../../components/molucules/blog-article";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ColorBox } from "../../components/atoms/box/color";
import { transitionState, headState } from "../../utils/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { pallet } from "../../utils/color";
import { BorderBox } from "../../components/atoms/box/border";
import { FramerBox } from "../../components/atoms/box/framer";
import { Sentence } from "../../components/atoms/text/common";
import { moduler } from "../../utils/styles";
import { Link } from "../../components/atoms/link/common";
import { useRouter } from "next/router";
import { usePost } from "../../hooks/usePost";
import { Loading } from "../../components/atoms/loading/common";

export const Page = () => {
  const router = useRouter();
  const isMQ = useMediaQuery();
  const [isReady, setReadyState] = useState(false);
  const [isImgReady, setImgReadyState] = useState(false);
  const isTransitioning = useRecoilValue(transitionState);
  const setHead = useSetRecoilState(headState);
  const post = usePost({ slug: router.query.slug as string });

  useEffect(() => {
    if (post.length > 0 && !isTransitioning) {
      setHead({
        title: `${post[0].title} | Tayori Demo`,
        ogImage: post[0].thumbnail ? post[0].thumbnail.url : "./dog.png",
      });
      setTimeout(() => setReadyState(true), 150);
    }
  }, [post, isTransitioning, router]);

  return (
    <FramerBox width={isMQ ? "100%" : "50%"}>
      <Loading isVisible={post.length <= 0} />
      {post.length > 0 && (
        <FramerBox width={"100%"}>
          <FlexBox
            way={isMQ ? "column" : "column"}
            width={"100%"}
            padding={isMQ ? "20% 5%" : "10vh 0"}
            position={"relative"}
          >
            <FlexBox
              width={"100%"}
              height={"100%"}
              way={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ColorBox
                width={"100%"}
                height={"320px"}
                opacity={isImgReady ? 1 : 0}
                background={
                  post[0].custom ? post[0].custom.color ?? "#F4F4F4" : "#F4F4F4"
                }
                transition={1}
              >
                <BorderBox
                  width={"100%"}
                  height={"100%"}
                  padding={"20px"}
                  borderPosition={"all"}
                  borderWidth={"1px"}
                  borderColor={pallet.black}
                  borderStyle={"solid"}
                >
                  <TransformBox
                    width={"100%"}
                    height={"100%"}
                    transform={
                      isImgReady
                        ? "scale(1.0) "
                        : isMQ
                        ? "scale(1.0)"
                        : "scale(1.4)"
                    }
                    origin={"center"}
                    overflow={"hidden"}
                    transition={1}
                  >
                    <TransformBox
                      width={"100%"}
                      height={"100%"}
                      transform={isImgReady ? "scale(1.0)" : "scale(0.8)"}
                      transition={1}
                    >
                      <_Image
                        width={"100%"}
                        height={"100%"}
                        src={
                          post[0].thumbnail ? post[0].thumbnail.url : "/dog.png"
                        }
                        fit={"cover"}
                        onLoad={(e) => {
                          setImgReadyState(true);
                        }}
                      />
                    </TransformBox>
                  </TransformBox>
                </BorderBox>
              </ColorBox>
            </FlexBox>
            <Box width={"100%"} shrink={"0"} position={"relative"}>
              <ColorBox
                width={"100%"}
                height={"100%"}
                opacity={isReady ? 1 : 0}
                transition={1}
              >
                <FlexBox
                  way={"column"}
                  width={"100%"}
                  height={"100%"}
                  padding={"10vh 0"}
                >
                  <BlogArticle post={post[0]} />
                </FlexBox>
              </ColorBox>
            </Box>
            <BorderBox
              width={"100%"}
              height={"100%"}
              padding={"30px 0 0 0"}
              borderPosition={"top"}
              borderWidth={"1px"}
              borderColor={pallet.black}
              borderStyle={"solid"}
            >
              <FlexBox
                way={"row"}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Sentence family={"'Zen Kaku Gothic New', sans-serif"}>
                  Thank you for reading!
                </Sentence>
                <Sentence size={moduler(-1)}>
                  <Link href={"/csr"} isBorder={true}>
                    ブログ一覧に戻る
                  </Link>
                </Sentence>
              </FlexBox>
            </BorderBox>
          </FlexBox>
        </FramerBox>
      )}
    </FramerBox>
  );
};

export default Page;
