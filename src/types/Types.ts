import { IconType } from "react-icons";

export class ButtonProps {
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
  constructor(
    text: string,
    img?: string,
    imgAlt?: string,
    icon?: IconType,
    bgPurple?: boolean,
    bgWhite?: boolean,
    border?: boolean,
    textBlack?: boolean,
    bgTransparent?: boolean,
    widthFull?: boolean,
    widthFit?: boolean,
    onClick?: () => void
  ) {
    this.img = img;
    this.imgAlt = imgAlt;
    this.icon = icon;
    this.text = text;
    this.bgPurple = bgPurple;
    this.bgWhite = bgWhite;
    this.border = border;
    this.textBlack = textBlack;
    this.bgTransparent = bgTransparent;
    this.widthFull = widthFull;
    this.widthFit = widthFit;
    this.onClick = onClick;
  }
}

export class CategoryCardProps {
  img: string;
  imgAlt: string;
  title: string;

  constructor(img: string, imgAlt: string, title: string) {
    this.img = img;
    this.imgAlt = imgAlt;
    this.title = title;
  }
}
export class WorkCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;

  constructor(src: string, alt: string, title: string, description: string) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.description = description;
  }
}

class contractsProps {
  address: string;
  chain: string;

  constructor(address: string, chain: string) {
    this.address = address;
    this.chain = chain;
  }
}

export class Collections {
  created_date: string;
  collection: string;
  image_url: string;
  name: string;
  description: string;
  contracts: contractsProps[];

  constructor(
    created_date: string,
    collection: string,
    image_url: string,
    name: string,
    description: string,
    contracts: contractsProps[]
  ) {
    this.created_date = created_date;
    this.collection = collection;
    this.image_url = image_url;
    this.name = name;
    this.description = description;
    this.contracts = contracts;
  }
}

export class collectionSliceProps {
  collections: Collections[];
  isLoading: boolean;
  isError: boolean;

  constructor(
    collections: Collections[],
    isLoading: boolean,
    isError: boolean
  ) {
    this.collections = collections;
    this.isLoading = isLoading;
    this.isError = isError;
  }
}
export class NFTProps {
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

  constructor(
    chain: string,
    address: string,
    identifier: string,
    description: string | null,
    image_url: string,
    collection: string,
    contract: string,
    creator: string,
    display_image_url: string,
    display_animation_url: string | null,
    metadata_url: string,
    name: string | null,
    opensea_url: string,
    token_standard: string,
    updated_at: string
  ) {
    this.chain = chain;
    this.address = address;
    this.identifier = identifier;
    this.description = description;
    this.image_url = image_url;
    this.collection = collection;
    this.contract = contract;
    this.creator = creator;
    this.display_image_url = display_image_url;
    this.display_animation_url = display_animation_url;
    this.metadata_url = metadata_url;
    this.name = name;
    this.opensea_url = opensea_url;
    this.token_standard = token_standard;
    this.updated_at = updated_at;
  }
}
export class initialStateProps {
  nft: NFTProps | null;
  isLoading: boolean;
  isError: boolean;

  constructor(nft: NFTProps | null, isLoading: boolean, isError: boolean) {
    this.nft = nft;
    this.isLoading = isLoading;
    this.isError = isError;
  }
}
export class NFT {
  identifier: string;
  display_image_url: string;
  name: string;
  description: string;
  collection: string;
  contract: string;

  constructor(
    identifier: string,
    display_image_url: string,
    name: string,
    description: string,
    collection: string,
    contract: string
  ) {
    this.identifier = identifier;
    this.display_image_url = display_image_url;
    this.name = name;
    this.description = description;
    this.collection = collection;
    this.contract = contract;
  }
}

export class initialStatePropsNFTDetailSlice {
  nfts: NFT[];
  isLoading: boolean;
  isError: boolean;

  constructor(nfts: NFT[], isLoading: boolean, isError: boolean) {
    this.nfts = nfts;
    this.isLoading = isLoading;
    this.isError = isError;
  }
}
