import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../features/auth/authSlice';

/**
 * Shows a banner for new users
 *
 * @example
 * <Banner />
 */
function Banner() {
  const appName = useSelector((state) => state.common.appName);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="banner">
      <div className="container">
        {
          //<h1 className="logo-font">{appName.toLowerCase()}</h1>
        }
        <img src="logo-banner.png" className="banner-logo-img" />
      </div>
    </div>
  );
}

export default memo(Banner);