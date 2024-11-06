import { useNavigation } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Button
      type='submit'
      disabled={isSubmitting}
      variant='contained'
      sx={{ width: '100%' }}
    >
      {isSubmitting ? <CircularProgress size='30px' color='inherit' /> : text}
    </Button>
  );
}

export default SubmitBtn;
