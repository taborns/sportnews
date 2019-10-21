import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Api from '../api/api';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
  },
});

function createData(rank, logo,  name, played, goal, points) {
  return { rank, logo,  name, played, goal, points };
}

const rows = [
  createData(1, 'https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png', 'Liverpool', 159, 6.0, 24),
  createData(2, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png', 'Manchester United', 237, 9.0, 37),
  createData(3, 'https://seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg', 'Arsenal', 262, 16.0, 24),
  createData(4, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-city-logo-vector.png', 'Mancheter City', 305, 3.7, 67),
  createData(5, 'https://seeklogo.net/wp-content/uploads/2014/10/tottenham-hotspur-fc-logo.png', 'Totenham', 356, 16.0, 49),

  createData(6, 'https://seeklogo.net/wp-content/uploads/2015/07/chelsea-fc-logo-preview.png', 'Chelsea', 159, 6.0, 24),
  createData(7, 'https://seeklogo.net/wp-content/uploads/2015/07/crystal-palace-fc-logo-vector-download.jpg', 'Crystal Palace', 237, 9.0, 37),
  createData(8, 'https://seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg', 'Arsenal', 262, 16.0, 24),
  createData(9, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-city-logo-vector.png', 'Mancheter City', 305, 3.7, 67),
  createData(10, 'https://seeklogo.net/wp-content/uploads/2014/10/tottenham-hotspur-fc-logo.png', 'Totenham', 356, 16.0, 49),

  createData(11, 'https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png', 'Liverpool', 159, 6.0, 24),
  createData(12, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png', 'Manchester United', 237, 9.0, 37),
  createData(13, 'https://seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg', 'Arsenal', 262, 16.0, 24),
  createData(14, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-city-logo-vector.png', 'Mancheter City', 305, 3.7, 67),
  createData(15, 'https://seeklogo.net/wp-content/uploads/2014/10/tottenham-hotspur-fc-logo.png', 'Totenham', 356, 16.0, 49),

  createData(16, 'https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector.png', 'Liverpool', 159, 6.0, 24),
  createData(17, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-united-logo-vector.png', 'Manchester United', 237, 9.0, 37),
  createData(18, 'https://seeklogo.net/wp-content/uploads/2014/09/Arsenal-vector-logo-download.jpg', 'Arsenal', 262, 16.0, 24),
  createData(19, 'https://seeklogo.net/wp-content/uploads/2011/08/manchester-city-logo-vector.png', 'Mancheter City', 305, 3.7, 67),
  createData(20, 'https://seeklogo.net/wp-content/uploads/2014/10/tottenham-hotspur-fc-logo.png', 'Totenham', 356, 16.0, 49),

];

export default function StandingTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell></TableCell>
            <TableCell>Club</TableCell>
            <TableCell align="left">P</TableCell>
            <TableCell align="left">GD</TableCell>
            <TableCell align="left">PTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.standings.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.rank}.</TableCell>
              <TableCell align="left"><img width={30} src={`${Api.API_BASE_URL}${row.team.logo}`} /></TableCell>

              <TableCell component="th" scope="row">
                {row.team.name}
              </TableCell>
              <TableCell align="left">{row.played}</TableCell>
              <TableCell align="left">{row.goal}</TableCell>
              <TableCell align="left">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
