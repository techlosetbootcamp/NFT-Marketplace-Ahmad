import { IconType } from "react-icons";

export type ButtonProps = {
  img?: string;
  imgAlt?: string;
  icon?: IconType;
  text: string;
  bgPurple?: boolean;
  bgWhite?: boolean;
  border?: boolean;
  textBlack?: boolean;
  bgTransparent?: boolean;
  widthFull?: boolean;
  widthFit?: boolean;
  onClick?: () => void;
};

export type CategoryCardProps = {
  img: string;
  imgAlt: string;
  title: string;
};
export type WorkCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type contractsProps = {
  address: string;
  chain: string;
};

export type Collections = {
  created_date: string;
  collection: string;
  image_url: string;
  name: string;
  description: string;
  contracts: contractsProps[];
};

export type collectionSliceProps = {
  collections: Collections[];
  isLoading: boolean;
  isError: boolean;
};
export type NFTProps = {
  chain: string;
  address: string;
  identifier: string;
  description: string | null;
  image_url: string;
  collection: string;
  contract: string;
  creator: string;
  display_image_url: string;
  display_animation_url: string | null;
  metadata_url: string;
  name: string | null;
  opensea_url: string;
  token_standard: string;
  updated_at: string;
};
export type initialStateProps = {
  nft: NFTProps | null;
  isLoading: boolean;
  isError: boolean;
};
export type NFT = {
  identifier: string;
  display_image_url: string;
  name: string;
  description: string;
  collection: string;
  contract: string;
};

export type initialStatePropsNFTDetailSlice = {
  nfts: NFT[];
  isLoading: boolean;
  isError: boolean;
};
