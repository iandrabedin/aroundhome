import { Spinner, Wrapper, Rotator, InnerSpin } from "./loading.style";
interface LoadingProps {
  size?: string;
}

const Loading = (props: LoadingProps) => {
  const { size } = props;

  return (
    <Spinner size={size}>
      <Wrapper>
        <Rotator>
          <InnerSpin />
          <InnerSpin />
        </Rotator>
      </Wrapper>
    </Spinner>
  );
};

export default Loading;
