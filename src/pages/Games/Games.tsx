import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import { Default } from '../../components/layout';

export default function Games() {
  return (
    <Default>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Link to="sprint">sprint</Link>
        <Link to="audiocall">audiocall</Link>
        <Link to="savannah">savannah</Link>
        <Outlet />
      </Box>
    </Default>
  );
}
