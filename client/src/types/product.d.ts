export interface IProduct {
  _id: string;
  id: string;
  img: string;
  name: string;
  price: number;
  compare_at_price: number;
  description: string;
  estimate_ship_date: string;
  tags: string;
  thumbnails: string[];
  images: string[];
  quantity: string;
}
