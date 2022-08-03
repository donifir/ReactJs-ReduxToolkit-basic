import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSuplier } from "../features/suplierSlice";
import {useNavigate} from 'react-router-dom'

export default function AddSuplier() {
  const [namaSuplier, setNamaSuplier] = useState("");
  const [alamatSuplier, setAlamatSuplier] = useState("");
  const [telpSuplier, setTelpSuplier] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createSuplier = async(e) => {
    e.preventDefault();
     await  dispatch(saveSuplier({namaSuplier, alamatSuplier, telpSuplier}));
     navigate('/')
     console.log('haha');
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={createSuplier}>
          <div className="mb-3">
            <label htmlFor="namaSuplier" className="form-label">
              Nama Suplier
            </label>
            <input
              id="namaSuplier"
              type="text"
              className="form-control"
              value={namaSuplier}
              onChange={(e) => setNamaSuplier(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="alamatSuplier" className="form-label">
              alamat Suplier
            </label>
            <input
              id="alamatSuplier"
              type="text"
              className="form-control"
              value={alamatSuplier}
              onChange={(e) => setAlamatSuplier(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telpSuplier" className="form-label">
              telp Suplier
            </label>
            <input
              id="telpSuplier"
              type="text"
              className="form-control"
              value={telpSuplier}
              onChange={(e) => setTelpSuplier(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
