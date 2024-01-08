import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollView = ({
  dataLength,
  moreHandler,
  hasMore,
  loader,
  children,
  ...restProps
}) => {
  return (
    <InfiniteScroll
      next={moreHandler}
      hasMore={hasMore || false}
      loader={loader || <div>Loading...</div>}
      dataLength={dataLength}>
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollView;
