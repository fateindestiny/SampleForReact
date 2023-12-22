import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import {useRouter} from '../../../../hooks';

const SampleNavigation = () => {
  const {location} = useRouter();
  const navigations = [
    {
      path: '/navigation/page1',
      name: 'page1',
      titleResId: '',
    },
    {
      path: '/navigation/page2',
      name: 'page2',
      titleResId: '',
    },
    {
      path: '/navigation/page3',
      name: 'page3',
      titleResId: '',
    },
  ];

  console.log('test:', location?.pathname);

  return (
    <nav className="sample_nav">
      <ul>
        {navigations.map(({path, name}, index) => (
          <li
            className={classnames(name, {
              active: path === location.pathname,
            })}
            key={`nav-item-${index}`}>
            <Link to={path} replace>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(SampleNavigation);
