import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Params, useMatches } from 'react-router-dom';
import style from './style.module.scss';

interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: {
    crumb: (param?: IMatches) => React.ReactNode;
  };
}
function BreadCrumb(): ReactElement {
  const matches = useMatches();

  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean((match as IMatches).handle?.crumb));
  // now map them into an array of elements, passing the loader
  // data to each one
  // .map((match) => (match as IMatches).handle.crumb(match as IMatches));
  console.log('br', matches, crumbs);
  return (
    <ul className={style.breadcrumb}>
      {crumbs.map((match, index) => (
        <li className={style['breadcrumb-item']} key={index}>
          <Link to={match.pathname}>
            {(match as IMatches).handle.crumb(match as IMatches)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BreadCrumb;
