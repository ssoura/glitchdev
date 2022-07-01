import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./features/alert/alertSlice";
import authSlice from "./features/auth/authSlice";
import settingsSlice from "./features/settings/settingsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        settings: settingsSlice,
        alert: alertSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch