import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import { MenuItem, Select, Box, TextField, Fab } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
  },
});

function createData(schedule, homelogo, hometeam, awayteam, awaylogo) {
  return { schedule, homelogo, hometeam, awayteam, awaylogo };
}

const rows = [
  createData('11:10 10/08', 'https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png', 'Liverpool', 'Manchester United', 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png'),
  createData('22:10 11/08', 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png', 'Manchester United', 'Arsenal', 'https://seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg'),
  createData('05:10 11/08', 'https://seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg', 'Arsenal', 'Totenham', 'https://seeklogo.net/wp-content/uploads/2014/10/tottenham-hotspur-fc-logo.png'),
];


export default function Prediction() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    
  return (
    <Box>
    <Paper className={classes.root}>
        
      <Table className={classes.table} aria-label="simple table">
        
        <TableBody>
          {rows.map(row => (
            <Box>
                <TableRow key={row.name}>

                <TableCell>{row.hometeam} </TableCell>
                <TableCell><img src={row.homelogo} width={25} /> </TableCell>

                <TableCell><img src={row.awaylogo} width={25} /> </TableCell>
                <TableCell align="center" >{row.awayteam}</TableCell>
                </TableRow>

                <TableRow key={row.name}>

                    <TableCell colSpan={2}>
                    <TextField
                            id="standard-name"
                            placeholder='Score'
                            className='no-padding-field'
                            margin="small"
                            variant="outlined"
                        /> 
                    </TableCell>

                    <TableCell colSpan={2}> 
                    
                        <TextField
                            id="standard-name"
                            placeholder='Score'
                            type="number"
                            className='no-padding-field'
                            margin="small"
                            variant="outlined"
                            
                        /> 
                    </TableCell>

                </TableRow>
            </Box>

          ))}
        </TableBody>
      </Table>

    </Paper>
        <Fab aria-label='Add' color='primary'>
        <SendIcon />
   </Fab>
   </Box>
  );
}
