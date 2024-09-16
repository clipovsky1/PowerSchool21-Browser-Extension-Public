interface Props {
  name: string;
}

const DistrictName: React.FC<Props> = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  );
};

export default DistrictName;
