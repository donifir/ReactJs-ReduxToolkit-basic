import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/suplierSlice"; //panggil fangction  dari slide
import { getSuplier, suplierSelectors, updateSuplier } from "../features/suplierSlice";
import  {useParams, useNavigate} from 'react-router-dom'


export default function EditSuplier() {
  const [namaSuplier, setNamaSuplier] = useState("");
  const [alamatSuplier, setAlamatSuplier] = useState("");
  const [telpSuplier, setTelpSuplier] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{id}=useParams();

  const suplier = useSelector((state)=>suplierSelectors.selectById(state,id)); //id dapatdari param

  useEffect(() => {
    dispatch(getSuplier())
  }, [dispatch])

  useEffect(() => {
    if(suplier){
      setNamaSuplier(suplier.nama_suplier)
      setAlamatSuplier(suplier.alamat_suplier)
      setTelpSuplier(suplier.telp_suplier)
    }
  }, [suplier])
  
  const handleUpdate = async(e)=>{
    e.preventDefault();
    await dispatch (updateSuplier({id,namaSuplier,alamatSuplier,telpSuplier}));
    navigate('/')
  }


  return (
    <div className="card"> 
      <div className="card-body">
        <form onSubmit={handleUpdate}>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
