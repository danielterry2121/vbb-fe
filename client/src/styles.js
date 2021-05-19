import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff914d',
    flexWrap:'wrap',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  toolBar: {
    margin:theme.spacing(3),
  },

  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: 'column-reverse',
    }
  }
}));