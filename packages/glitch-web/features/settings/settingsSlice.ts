import { createSlice } from '@reduxjs/toolkit'
import { DefaultCommunity } from '../../constants'

export interface Settings {
  communityName: string
  communityLogo: string
  communityLogoPublicId?: string
  primaryColor: string
  isEmailVerificationRequired: boolean
  facebookLoginEnabled: boolean
  googleLoginEnabled: boolean
  githubLoginEnabled: boolean
}

const initialState: Settings = {
  communityName: DefaultCommunity.communityName,
  communityLogo: DefaultCommunity.communityLogo,
  communityLogoPublicId: DefaultCommunity.communityLogoPublicId,
  primaryColor: DefaultCommunity.primaryColor,
  isEmailVerificationRequired: DefaultCommunity.isEmailVerificationRequired,
  facebookLoginEnabled: DefaultCommunity.facebookLoginEnabled,
  googleLoginEnabled: DefaultCommunity.googleLoginEnabled,
  githubLoginEnabled: DefaultCommunity.githubLoginEnabled,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCommunityLogo: (state, action) => {
      state.communityLogo = action.payload
    },
    setCommunityLogoPublicIs: (state, action) => {
      state.communityLogoPublicId = action.payload
    },
    setCommunityName: (state, action) => {
      state.communityName = action.payload
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload
    },
    setIsEmailVerificationRequired: (state, action) => {
      state.isEmailVerificationRequired = action.payload
    },
    setFacebookLoginEnabled: (state, action) => {
      state.facebookLoginEnabled = action.payload
    },
    setGoogleLoginEnable: (state, action) => {
      state.googleLoginEnabled = action.payload
    },
    setGithubLoginEnable: (state, action) => {
      state.githubLoginEnabled = action.payload
    },
  },
})

export default settingsSlice.reducer

export const {
  setCommunityLogo,
  setCommunityLogoPublicIs,
  setCommunityName,
  setPrimaryColor,
  setIsEmailVerificationRequired,
  setFacebookLoginEnabled,
  setGoogleLoginEnable,
  setGithubLoginEnable,
} = settingsSlice.actions
