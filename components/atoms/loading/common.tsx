import styled from "styled-components";
import { Box } from "../box/common";
import { ColorBox } from "../box/color";
import { FlexBox } from "../box/flex";

const FixFlexBox = styled(FlexBox)`
  top: 0;
  left: 0;
`;

const LoadingAnimator = styled(ColorBox)<{ duration: number }>`
  @keyframes spin3D {
    from {
      transform: rotate3d(0.5, 0.5, 0.5, 360deg);
    }
    25% {
      transform: rotate3d(0.5, 0.5, 0.5, 270deg);
    }
    50% {
      transform: rotate3d(0.5, 0.5, 0.5, 180deg);
    }
    75% {
      transform: rotate3d(0.5, 0.5, 0.5, 90deg);
    }
    to {
      transform: rotate3d(0deg);
    }
  }

  animation: spin3D ${(props) => props.duration}s linear 0s infinite;
`;

export const Loading = (props: { isVisible: boolean }) => (
  <ColorBox
    opacity={props.isVisible ? 1 : 0}
    zIndex={"99"}
    pointerEvents={"none"}
  >
    <FixFlexBox
      way={"column"}
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"fixed"}
    >
      <Box width={"100px"} height={"100px"}>
        <LoadingAnimator
          position={"absolute"}
          width={"100px"}
          height={"100px"}
          radius={"100px"}
          background={
            "linear-gradient(90deg, rgba(2,0,36,0.3435968137254902) 0%, rgba(204,79,240,0.7861738445378151) 13%, rgba(42,228,218,0.7777704831932774) 86%, rgba(0,212,255,0.09429709383753504) 100%);"
          }
          duration={2.2}
        ></LoadingAnimator>
        <LoadingAnimator
          position={"absolute"}
          width={"100px"}
          height={"100px"}
          radius={"100px"}
          background={
            "linear-gradient(90deg, rgba(2,0,36,0.3435968137254902) 0%, rgba(204,79,240,0.7861738445378151) 13%, rgba(42,228,218,0.7777704831932774) 86%, rgba(0,212,255,0.09429709383753504) 100%);"
          }
          duration={1.6}
        ></LoadingAnimator>
      </Box>
    </FixFlexBox>
  </ColorBox>
);
