import useRouter from '../../../hooks/useRouter';

const MainContainer = () => {
  const {navigate} = useRouter();
  const moveSubPage = () => {
    navigate('/router');
  };

  return <div>
    Sample Main Page
    <ul>
      <li>
        Router Sample<br/>
        <button onClick={moveSubPage}>Move Sub page</button>
      </li>
    </ul>
  </div>;
};
export default MainContainer;