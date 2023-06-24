import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color={'white'}>
      {'Copyright © '}
      <Link color="inherit" href="/dashboard">
        Candels By Sarah B.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box mt={5}>
        <Box
          textAlign='center'
          component="div"
          sx={{
            py: 10,
            px: 2,
            mt: 'auto',
            backgroundColor: 'black'
          }}
        >
          <Container>
            <Typography variant="body1">

            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
  );
}

