interface NoResultProps {
  message: string;
}

const NoResult = ({ message }: NoResultProps) => {
  return (
    <div className="flex mt-10 items-center justify-center text-center">
      <span className="text-sm text-neutral-500">{message}</span>
    </div>
  );
};

export default NoResult;
