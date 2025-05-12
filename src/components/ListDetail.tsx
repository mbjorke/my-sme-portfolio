import * as React from 'react';
import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
};

const ListDetail: React.FC<ListDetailProps> = ({ item }) => (
  <div>
    <h2>{item.name}</h2>
    <p>ID: {item.id}</p>
  </div>
);

export default ListDetail;
