import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// import { Link } from 'react-router-dom';

function RenderGroomerPage(props) {
  return (
    <div>
      <div>
        <h1>Welcome to the Groomer Page</h1>
      </div>

      <form>
        <p>
          <input id="name" type="text" placeholder="Name" name="name" />
        </p>
        <p>
          <input id="hours" type="text" placeholder="Hours" name="hours" />
        </p>
        <p>
          <input
            id="phone_number"
            type="tel"
            placeholder="Phone Number"
            name="phone_number"
          />
        </p>
        <p>
          <input id="bio" type="text" placeholder="Bio" name="bio" />
        </p>
        <p>
          <input id="email" type="email" placeholder="Email" name="email" />
        </p>
        <p>
          <input id="city" type="text" placeholder="City" name="city" />
        </p>
        <p>
          <input id="state" type="text" placeholder="State" name="state" />
        </p>
        <p>
          <input id="zip" type="number" placeholder="Name" name="name" />
        </p>
        <p>
          <input
            id="street_number"
            type="number"
            placeholder="Street Number"
            name="street_number"
          />
        </p>
        <p>
          <input
            id="street_name"
            type="text"
            placeholder="Street Name"
            name="street_name"
          />
        </p>
      </form>
    </div>
  );
}
export default RenderGroomerPage;
