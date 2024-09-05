import { createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour modifier le profil utilisateur
export const editUserProfile = createAsyncThunk(
  'profile/editUserProfile',
  async ({ userName }, { getState, rejectWithValue }) => {
    const token = getState().login.token;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ userName }),
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
