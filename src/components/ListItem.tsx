import React from 'react';

import { User } from '../interfaces';

type Props = {
  data: User;
};

const ListItem: React.FC<Props> = ({ data }) => (
  <span>
    {data.id}: {data.name}
  </span>
);

export default ListItem;
