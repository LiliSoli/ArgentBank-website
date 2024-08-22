import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour récupérer le token
export const fetchToken = createAsyncThunk(
  'login/fetchToken',
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data.token;  // Supposons que l'API renvoie le token dans `data.token`
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Définir l'état initial
const initialState = {
  token: null,
  loading: false,
  error: null,
};

// Créer le slice pour gérer l'état du login
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // Tu peux ajouter des reducers ici pour des actions synchrones si nécessaire
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
