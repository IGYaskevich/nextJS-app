import Link from "next/link";
import style from "./styles.module.scss";
import { FC, ReactNode } from "react";

type ALinkType = {
  href: string;
  // name: string;
  children: ReactNode;
};
const ALink: FC<ALinkType> = (props) => {
  const { href, children } = props;
  return (
    <Link href={href} id={`alinkID-${href}`} className={style.alink}>
      {children}
      {/*{name}*/}
    </Link>
  );
};
export default ALink;
