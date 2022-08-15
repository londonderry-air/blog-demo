import useMediaQuery from "../../hooks/useMediaQuery";
import { Post } from "../../hooks/usePost";
import { FlexBox } from "../atoms/box/flex";
import { IsrBlogItem } from "../molucules/isr-item";

export const IsrBlogList = (props: { posts: Post[] }) => {
  const isMQ = useMediaQuery();
  return (
    <FlexBox
      width={"100%"}
      padding={isMQ ? "1em 5%" : "1em 10%"}
      way={isMQ ? "column" : "row"}
      wrap={"wrap"}
      justifyContent={isMQ ? "center" : "flex-start"}
    >
      {props.posts.map((p, i) => (
        <IsrBlogItem key={i} index={i} post={p} />
      ))}
    </FlexBox>
  );
};
