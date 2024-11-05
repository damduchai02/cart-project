import { NavLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';

function Logo() {
  return (
    <NavLink to='/'>
      <CodeIcon fontSize='large' sx={{ color: '#000' }} />
    </NavLink>
  );
}

export default Logo;
