import { useTheme } from '@mui/material';
import RingLoader from 'react-spinners/RingLoader';

interface SpinnerI {
  isLoading: boolean;
  children: React.ReactElement | React.ReactElement[];
}

export const Spinner = ({ isLoading, children }: SpinnerI) => {
  const theme = useTheme();
  if (!isLoading) return children;

  return <RingLoader color={theme.palette.primary.light} size={100} />;
};
