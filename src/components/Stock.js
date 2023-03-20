import PropTypes from 'prop-types';

const Stock = (props) => {
  const { companyName } = props;
  return (
    <>
      <p>{companyName }</p>
    </>
  );
};

Stock.propTypes = {
  companyName: PropTypes.string.isRequired,
};

export default Stock;
