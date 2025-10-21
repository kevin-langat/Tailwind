import { Link } from 'react-router-dom';

function NavBarHelper({ topicName, topicURL }) {
  return (
    <Link
      onClick={() => setSideBar(false)}
      className='hover:text-sky-600 hover:underline active:text-orange-400 text-gray-400'
      to={topicURL}
    >
      {topicName}
    </Link>
  );
}

export default NavBarHelper;
