import { BorderBox } from "../atoms/box/border";
import { FlexBox } from "../atoms/box/flex";
import { Sentence } from "../atoms/text/common";
import { moduler } from "../../utils/styles";
import { TransformBox } from "../atoms/box/transform";
import { useEffect, useState } from "react";
import { Post } from "../../hooks/usePost";
import { getDateText, getTimeText } from "../../utils/date";
import { CursorBox } from "../atoms/box/cursor";
import { AnimLink } from "../atoms/link/animation";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Image } from "../atoms/image/common";
import { pallet } from "../../utils/color";
import { Link } from "../atoms/link/common";

export const IsrBlogItem = (props: { post: Post; index: number }) => {
  const isMQ = useMediaQuery();
  const [color, setColor] = useState({
    right: isMQ ? "#ccdae1" : "#FFFFFF",
    left: "#ccdae1",
  });
  const [isShow, setShow] = useState(false);
  const postColor = props.post.custom
    ? props.post.custom.color ?? "#FFFFFF"
    : "#FFFFFF";
  useEffect(() => {
    setTimeout(() => setShow(true), props.index * 100);
  }, []);

  useEffect(() => {
    setColor({
      right: isMQ ? postColor : "#FFFFFF",
      left: postColor,
    });
  }, [isMQ]);

  return (
    <Link width={isMQ ? "100%" : "50%"} href={`/csr/${props.post.slug}`}>
      <CursorBox cursor={"pointer"} width={"100%"}>
        <TransformBox
          transform={isShow ? "translateY(0)" : "translateY(100px)"}
          transition={1}
          width={"100%"}
        >
          <FlexBox
            way={"column"}
            width={"100%"}
            padding={isMQ ? "0" : "0 1em"}
            margin={"0 0 2em 0"}
            alignItems={"flex-start"}
            gap={"1em"}
          >
            <BorderBox
              width={"100%"}
              padding={"20px"}
              borderPosition={"all"}
              borderWidth={"1px"}
              borderColor={pallet.black}
              borderStyle={"solid"}
            >
              <Image
                width={"100%"}
                height={"200px"}
                fit={"cover"}
                src={
                  props.post.thumbnail ? props.post.thumbnail.url : "./dog.png"
                }
              />
            </BorderBox>
            <Sentence
              size={moduler(-1)}
              weight={"500"}
              family={"'Zen Kaku Gothic New', sans-serif"}
              h_space={"0.04em"}
            >
              {props.post.title}
            </Sentence>
            <Sentence
              size={moduler(-2)}
              weight={"500"}
              family={"'Zen Kaku Gothic New', sans-serif"}
              h_space={"0.04em"}
              color={pallet.gray03}
            >
              {new Date(props.post.release).getFullYear()}/
              {getDateText(new Date(props.post.release), true)}{" "}
              {getTimeText(new Date(props.post.release), true)}
            </Sentence>
          </FlexBox>
        </TransformBox>
      </CursorBox>
    </Link>
  );
};
