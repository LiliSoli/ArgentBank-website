import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour récupérer le profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().login.token;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: '',
      });
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Action asynchrone pour modifier le profil utilisateur
export const editUserProfile = createAsyncThunk(
  'profile/editUserProfile',
  async ({ userName, firstName, lastName }, { getState, rejectWithValue }) => {
    const token = getState().login.token;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ userName, firstName, lastName }),
      });
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data);
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userName: '',
  firstName: '',
  lastName: '',
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.userName = '';
      state.firstName = '';
      state.lastName = '';
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch User Profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Edit User Profile
      .addCase(editUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.loading = false;
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
