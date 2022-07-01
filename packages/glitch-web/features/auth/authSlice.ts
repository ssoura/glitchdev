import { createSlice } from '@reduxjs/toolkit'
import { UserRole } from '../../constants'
import { Socket } from 'socket.io-client'

export interface AuthUser {
  _id: string
  role: UserRole
  email?: string
  username?: string
  image?: string
  imagePublicId?: string
  coverImagePublicId?: string
  coverImage?: string
  fullName?: string
  facebookId?: string
  googleId?: string
  githubId?: string
  about?: string
  website?: string
  notifications: any[]
  followers: any[]
  following: any[]
  isOnline: boolean
}

export enum PopupType {
  Sign_Up = 'SIGN_UP',
  Log_In = 'LOG_IN',
  Forgot_Password = 'FORGOT_PASSWORD',
}

export interface AuthState {
  user: AuthUser | null
  socket: Socket | null
  token: string | null
  isPopupOpen: boolean
  popupType: null | PopupType
}

const initialState: AuthState = {
  user: null,
  token: null,
  socket: null,
  isPopupOpen: false,
  popupType: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    clearAuthUser: (state) => {
      state.user = null
    },
    setSocket: (state, action) => {
      state.socket = action.payload
    },
    openAuthPopup: (state, action) => {
      ;(state.isPopupOpen = true), (state.popupType = action.payload)
    },
    closeAuthPopup: (state, action) => {
      state.isPopupOpen = false
    },
    addUserNotification: (state, action) => {
      state.user.notifications = [...state.user.notifications, action.payload]
    },
    removeUserNotification: (state, action) => {
      state.user.notifications = state.user.notifications.filter((n: any) => n._id !== action.payload)
    },
    addUserFollowing: (state, action) => {
      state.user.following = [...state.user.following, action.payload]
    },
    removeUserFollowing: (state, action) => {
      state.user.following = state.user.following.filter((f: any) => f._id !== action.payload)
    },
    cleanUserNotifications: (state, action) => {
      state.user.notifications = []
    },
    addUserImage: (state, action) => {
      ;(state.user.image = action.payload.image), (state.user.imagePublicId = action.payload.imagePublicId)
    },
    addUserCover: (state, action) => {
      ;(state.user.coverImage = action.payload.coverImage),
        (state.user.coverImagePublicId = action.payload.coverImagePublicId)
    },
  },
})

export default authSlice.reducer
export const {
  setAuthUser,
  setToken,
  clearAuthUser,
  setSocket,
  openAuthPopup,
  closeAuthPopup,
  addUserNotification,
  removeUserNotification,
  addUserFollowing,
  removeUserFollowing,
  cleanUserNotifications,
  addUserImage,
  addUserCover,
} = authSlice.actions
