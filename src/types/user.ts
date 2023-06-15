export type LocalGithubUser={
  login:string,
  id:number,
  avatar:string,
  company:string,
  name:string
  blog:string,
  location:string|null,
  bio:string|null,
  twitter:string|null,
  repos:number,
  followers:number
  following:number,
  created:string,
}

export type GithubUser={
  login:string,
  id:number,
  name:string
  avatar_url:string,
  company:string,
  blog:string,
  location:string|null,
  bio:string|null,
  twitter_username:string|null,
  public_repos:number,
  followers:number
  following:number
  created_at:string,
}

export type GithubError={
  message:string,
  documentation_url:string
}