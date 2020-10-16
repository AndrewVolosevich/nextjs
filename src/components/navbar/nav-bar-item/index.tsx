import React from "react";
import Link from "next/link";

const NavBarItem = ({
  path,
  text,
  current,
  curCls,
}: {
  path: string;
  text: string;
  current: boolean;
  curCls: string;
}) => {
  return (
    <li className={current ? curCls : null}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

export default NavBarItem;
