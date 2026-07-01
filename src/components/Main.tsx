import { HtmlEscapedString } from 'hono/utils/html';

type Children = HtmlEscapedString | Promise<HtmlEscapedString> | (HtmlEscapedString | Promise<HtmlEscapedString>)[];

interface MainProps {
  children: Children;
}

export const Main = ({ children }: MainProps) => <main>{children}</main>;
