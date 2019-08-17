interface Props {
  children: JSX.Element;
  token: string | null;
  fetchMe(): void;
}

const Initializer = ({ children, token, fetchMe }: Props) => {
  if (token) {
    fetchMe();
  }
  return children;
};

export default Initializer;
