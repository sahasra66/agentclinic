import { HtmlEscapedString } from 'hono/utils/html';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

type Children = HtmlEscapedString | Promise<HtmlEscapedString> | (HtmlEscapedString | Promise<HtmlEscapedString>)[];

interface LayoutProps {
  title: string;
  children: Children;
}

export const Layout = ({ title, children }: LayoutProps) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/styles/global.css" />
    </head>
    <body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </body>
  </html>
);
