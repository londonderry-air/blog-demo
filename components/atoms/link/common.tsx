import styled from "styled-components";
import NextLink from "next/link";

const LinkBox = styled.a<{ width?: string; isBorder?: boolean }>`
  display: block;
  width: ${(props) => props.width ?? "fit-content"};
  ${(props) => (props.isBorder ? "border-bottom: solid 1px #212121;" : "")}
  cursor: pointer;
  margin: 0;
`;

export const Link = (props: {
  href: string;
  width?: string;
  isBorder?: boolean;
  children?: React.ReactNode;
}) => (
  <NextLink href={props.href}>
    <LinkBox width={props.width} isBorder={props.isBorder}>
      {props.children}
    </LinkBox>
  </NextLink>
);
