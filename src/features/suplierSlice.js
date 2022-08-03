import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";
//createAsyncThunk untuk asyn function
//createEntityAdapter untuk menormalisasi data

export const getSuplier = createAsyncThunk("supliers/getSuplier", async () => {
  const response = await axios.get("http://localhost:8000/api/suplier");
  return response.data.data; //dikirim ke action payload
  // console.log(response);
});

export const saveSuplier = createAsyncThunk(
  "supliers/saveSuplier",
  async ({ namaSuplier, alamatSuplier, telpSuplier }) => {
    const response = await axios.post(
      "http://localhost:8000/api/suplier/create",
      {
        nama_suplier: namaSuplier,
        alamat_suplier: alamatSuplier,
        telp_suplier: telpSuplier,
      }
    );
    console.log(response);
    return response.data.data;
    // console.log(response);
  }
);

export const deleteSuplier = createAsyncThunk(
  "supliers/deleteSuplier",
  async (id) => {
    await axios.delete(`http://localhost:8000/api/suplier/${id}`);
    // return response.data.data;
    return id;
    // console.log(response);
  }
);

export const updateSuplier = createAsyncThunk(
  "supliers/updateSuplier",
  async ({ id, namaSuplier, alamatSuplier, telpSuplier }) => {
    const response = await axios.put(
      `http://localhost:8000/api/suplier/${id}`,
      {
        nama_suplier: namaSuplier,
        alamat_suplier: alamatSuplier,
        telp_suplier: telpSuplier,
      }
    );
    console.log(response);
    return response.data.data;
    // console.log(response);
  }
);

const suplierEntity = createEntityAdapter({
  selectId: (suplier) => suplier.id,
});

const suplierSlice = createSlice({
  name: "suplier",
  initialState: suplierEntity.getInitialState(),

  extraReducers: {
    [getSuplier.fulfilled]: (state, action) => {
      suplierEntity.setAll(state, action.payload);
    },
    [saveSuplier.fulfilled]: (state, action) => {
      suplierEntity.addOne(state, action.payload);
    },
    [deleteSuplier.fulfilled]: (state, action) => {
      suplierEntity.removeOne(state, action.payload);
    },

    [updateSuplier.fulfilled]: (state, action) => {
        suplierEntity.updateOne(state, {id:action.payload.id, updates:action.payload});
      },
  },
});

export const suplierSelectors = suplierEntity.getSelectors(
  (state) => state.suplier
); //suplier harus sama dengan di store
export default suplierSlice.reducer; //agar bsa dipanggil di store
