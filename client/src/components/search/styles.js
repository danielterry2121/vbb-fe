import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    position: 'contained',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
    margin:'20px 200px',
    width:'100%',
    borderRadius:'20px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    padding:'10px 10px 10px 5px',
    margin:'0px',

  },
  input: {
    width:'500px',
    borderRadius:'5px 0px 0 5px'
  },
}));