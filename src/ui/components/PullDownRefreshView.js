import PullToRefresh from 'react-simple-pull-to-refresh';

const PullDownRefreshView = ({onRefresh, children, loader, ...restProps}) => {
  return (
    <PullToRefresh
      onRefresh={onRefresh}
      refreshingContent={loader || <div>loading...</div>}
      {...restProps}>
      {children}
    </PullToRefresh>
  );
};

export default PullDownRefreshView;
