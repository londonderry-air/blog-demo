import { useEffect, useState } from "react";
import { Box } from "../../components/atoms/box/common";
import { FlexBox } from "../../components/atoms/box/flex";
import { TransformBox } from "../../components/atoms/box/transform";
import { Post } from "../../hooks/usePost";
import { Image } from "../../components/atoms/image/common";
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
import { Loading } from "../../components/atoms/loading/common";

export const Page = (props: { post?: Post }) => {
  const isMQ = useMediaQuery();
  const [isReady, setReadyState] = useState(false);
  const [isImgReady, setImgReadyState] = useState(false);
  const isTransitioning = useRecoilValue(transitionState);
  const setHead = useSetRecoilState(headState);

  useEffect(() => {
    if (props.post && !isTransitioning) {
      setHead({
        title: `${props.post.title} | Tayori Demo`,
        ogImage: props.post.thumbnail ? props.post.thumbnail.url : "./dog.png",
      });
      setTimeout(() => setReadyState(true), 150);
    }
  }, [props.post, isTransitioning]);

  return (
    <FramerBox width={isMQ ? "100%" : "50%"}>
      <Loading isVisible={!props.post} />
      {props.post && (
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
                  props.post.custom
                    ? props.post.custom.color ?? "#F4F4F4"
                    : "#F4F4F4"
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
                      <Image
                        width={"100%"}
                        height={"100%"}
                        src={
                          props.post.thumbnail
                            ? props.post.thumbnail.url
                            : "/dog.png"
                        }
                        fit={"cover"}
                        onLoad={() => {
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
                  <BlogArticle post={props.post} />
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
                  <Link href={"/isr"} isBorder={true}>
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.CMS_ORIGIN}/api/post?category=isr`);
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // const origin = process.env.SOYO_ORIGIN
  const data = await fetch(
    `${process.env.CMS_ORIGIN}/api/post${params.slug ? "/" + params.slug : ""}`
  );

  if (data.status !== 200) {
    return {
      props: {
        post: null,
      },
      revalidate: 60 * 60 * 24,
    };
  }

  const post: Post = await data.json();
  post.release = new Date(post.release);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 60 * 60 * 24,
  };
};
