import React from "react";
import { Link } from "react-router-dom";
import User from "../User/User";
import IconRepo from "../../Images/icon-folder.png";
import {
  listReposBlock,
  listReposItems,
  reposItem,
  invisibleBlock
} from "./MyListRepos.module.css";

const MyListRepos = ({ login, avatar, url, listRepos }) => {
  return (
    <div className={listReposBlock}>
      <User name={login} avatar={avatar} url={url} />
      {listRepos.length > 0 && (
        <ul className={listReposItems}>
          {listRepos.length > 0 &&
            listRepos.map(item => (
              <li key={item.id}>
                <Link
                  exact="true"
                  to={`/${item.owner.login}/${item.name}`}
                  className={reposItem}
                >
                  <img src={IconRepo} alt={item.name} />
                  {item.name}
                  <div className={invisibleBlock}>nothing</div>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MyListRepos;
