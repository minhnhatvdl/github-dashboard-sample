import React from "react";
import User from "../User/User";
import {
  repoItem,
  nameRepo,
  languageRepo,
  descriptionRepo,
  infosRepo
} from "./MyRepo.module.css";

const MyRepo = ({
  name,
  description,
  language,
  stargazers_count,
  created_at,
  updated_at,
  owner
}) => (
  <div className={repoItem}>
    <User name={owner.login} avatar={owner.avatar_url} url={owner.url} />
    <h2 className={nameRepo}>{name}</h2>
    <p className={languageRepo}>{language}</p>
    <p className={descriptionRepo}>{description}</p>
    <div className={infosRepo}>
      <span><b>Star</b> {stargazers_count}</span>
      <span>
        <b>Date creation</b> {new Intl.DateTimeFormat().format(new Date(created_at))}
      </span>
      <span>
        <b>Date update</b> {new Intl.DateTimeFormat().format(new Date(updated_at))}
      </span>
    </div>
  </div>
);

export default MyRepo;
