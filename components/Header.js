import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <header>
        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" />
        <ul className="list-link">
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
