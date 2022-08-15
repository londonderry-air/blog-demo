import useMediaQuery from "../../hooks/useMediaQuery";
import { moduler } from "../../utils/styles";
import { getColorTransition } from "../../utils/transition";
import { FlexBox } from "../atoms/box/flex";
import { Link } from "../atoms/link/common";
import { MainH, Sentence } from "../atoms/text/common";

export const PortfolioHeader = () => {
  const isMQ = useMediaQuery();
  return (
    <FlexBox
      width={"100%"}
      way={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={isMQ ? "1em 5%" : "1em 10%"}
      position={"fixed"}
      zIndex={"2"}
    >
      <MainH size={moduler(-1)}>
        <Link href={"/"}>
          <Sentence
            size={moduler(1)}
            weight={"500"}
            family={"'Zen Kaku Gothic New', sans-serif"}
          >
            Tayori Demo
          </Sentence>
        </Link>
      </MainH>
      <FlexBox
        way={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        gap={"1em"}
      >
        <Link href={"/isr"}>
          <Sentence
            size={moduler(1)}
            weight={"500"}
            family={"'Zen Kaku Gothic New', sans-serif"}
          >
            ISR Blog
          </Sentence>
        </Link>
        <Link href={"/csr"}>
          <Sentence
            size={moduler(1)}
            weight={"500"}
            family={"'Zen Kaku Gothic New', sans-serif"}
          >
            CSR Blog
          </Sentence>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};
