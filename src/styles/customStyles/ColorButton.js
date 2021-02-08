import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../styles/global/colors';

export const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    backgroundColor: colors.green_2,
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);
