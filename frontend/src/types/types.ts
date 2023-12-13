export type SectionHeadingProps = {
  date: string;
  heading: string;
};

export type BlogpostProps = {
  id?: number;
  imgSrc: string;
  author: string;
  heading: string;
  latest?: boolean;
  category: string;
  popular?: boolean;
  description: string;
};

export type ButtonProps = {
  target: string;
  btnText: string;
};

export type PageBannerProps = {
  imgSrc: string;
  title: string;
  description: string;
};
