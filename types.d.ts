import { Image } from "sanity";

type Product = {
    _id: string;
    _type: string;
    name: string;
    price: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    details: string;
  }

type Bannerdata = {
    _id: string;
    _type: string;
    name: string;
    price: string;
    largeText1: string;
    largeText2: string;
    discount: string;
    saleTime: string;
    buttonText: string;
    product: string;
    midText: string;
    smallText: string;
  }

  type Contacts = {
    firstName: string;
    lastName: string;
    message: string;
  }

