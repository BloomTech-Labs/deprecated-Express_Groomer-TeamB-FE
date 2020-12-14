import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export const SearchResults = props => {
  const { groomer } = props;
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={groomer.business_name}
        extra={
          <Link to={`/groomer-search-results/${groomer.user_id}`}>Go</Link>
        }
        style={{ width: 400 }}
      >
        <h3>
          {groomer.given_name} {groomer.family_name}
        </h3>
        <p>{groomer.phone_number}</p>
        <p>
          {groomer.address} {groomer.city}, {groomer.zip_code}
        </p>
      </Card>
    </div>
  );
};
