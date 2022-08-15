import styled from "styled-components";
import { CursorBox } from "../box/cursor";

export type BorderProps = {
  width?: string;
  color?: string;
  style?: NonNullable<JSX.IntrinsicElements["div"]["style"]>["borderStyle"];
  radius?: string;
};

export const Image = (props: {
  width: string;
  height: string;
  src: string;
  fit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  radius?: string;
  cursor?: string;
  onLoad?: () => void;
}) => {
  return (
    <CursorBox
      width={props.width}
      height={props.height}
      radius={props.radius}
      overflow={"hidden"}
      cursor={props.cursor ?? ""}
    >
      <img
        style={{
          width: props.width,
          height: props.height,
          objectFit: props.fit,
        }}
        src={props.src}
        onLoad={() => props.onLoad()}
      />
    </CursorBox>
  );
};

export const ___Image = styled.div<{
  width: string;
  height: string;
  src: string;
  fit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  radius?: string;
  border?: BorderProps;
  cursor?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.fit};
  ${(props) =>
    props.border
      ? `
    border-width: ${props.border.width ?? "1px"};
    border-style: ${props.border.style ?? "solid"};
    border-color: ${props.border.color ?? "gray"};
  `
      : ""}
`;

export const __Image = styled.img<{
  width: string;
  height: string;
  fit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  radius?: string;
  border?: BorderProps;
  cursor?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  overflow: hidden;
  object-fit: ${(props) => props.fit};
  ${(props) =>
    props.border
      ? `
    border-width: ${props.border.width ?? "1px"};
    border-style: ${props.border.style ?? "solid"};
    border-color: ${props.border.color ?? "gray"};
  `
      : ""}
`;

export const _Image = (props: {
  width: string;
  height: string;
  src: string;
  fit: NonNullable<JSX.IntrinsicElements["img"]["style"]>["objectFit"];
  radius?: string;
  border?: BorderProps;
  cursor?: string;
  onLoad: (e: React.SyntheticEvent<HTMLDivElement, Event>) => void;
}) => {
  return <__Image {...props} />;
};
