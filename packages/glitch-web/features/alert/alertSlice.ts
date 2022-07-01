import { createSlice } from '@reduxjs/toolkit'

export enum AlertTypes {
  Error = 'error',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
}
export enum AlertAlignment {
  Top = 'top',
  Bottom = 'Bottom',
}

export interface Alert {
  message: string
  type: AlertTypes
  autoClose?: boolean
  alignment?: AlertAlignment
}

const initialState: Alert = {
  message: null,
  type: AlertTypes.Success,
  autoClose: true,
  alignment: AlertAlignment.Top,
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    openAlert: (state, action) => {
      state = action.payload
    },
    closeAlert: (state, action) => {
      state = initialState
    },
  },
})

export default alertSlice.reducer

export const { openAlert, closeAlert } = alertSlice.actions
