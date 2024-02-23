import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="vortex-wrapper"
      colors={['lime', 'green', 'darkGreen', 'green', 'lime', 'darkGreen']}
    />
  );
};
