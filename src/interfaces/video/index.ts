import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  caption?: string;
  content: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  caption?: string;
  content?: string;
  business_id?: string;
}
