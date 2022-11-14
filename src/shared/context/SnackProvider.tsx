import React from 'react'
import { SnackbarProvider } from 'notistack'
// import SnackbarClose from '@/components/base/snack/SnackbarClose';

interface Props {
  children: React.ReactNode
}

const SnackProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider
    //   maxSnack={1}
    >
      {children}
    </SnackbarProvider>
  )
}

export default SnackProvider
