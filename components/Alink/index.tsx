import Link from "next/link";
import style from "./styles.module.scss";

type ALinkType = {
  href: string;
  name: string;
};
export const ALink = ({ href, name }: ALinkType) => {
  return (
    <Link href={href} id={href} className={style.alink}>
      {name}
    </Link>
  );
};
