import React from 'react'
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { GlobalLoaderConfig } from "../hooks/global-loader-config";
import { LoaderProps } from '../common/types';

function Loader({ axios, color, size }: LoaderProps) {
  const [loading] = GlobalLoaderConfig({ axios: axios });
  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress size={size} sx={{ color: color }} />
      </Backdrop>
    </Box>
  );
}

export { Loader };