import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSuplier, suplierSelectors, deleteSuplier } from "../features/suplierSlice";
import {Link} from 'react-router-dom'

export default function ShowSuplier() {
  const dispatch = useDispatch();
  const suplier = useSelector(suplierSelectors.selectAll); //cara ambil data dari store
  useEffect(() => {
    dispatch(getSuplier());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="card-body">
        <Link to={'/add'} className="btn btn-primary btn-sm">create</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Suplier</th>
              <th scope="col">Alamat Suplier</th>
              <th scope="col">Telp Suplier</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {suplier.map((suplier, index) => (
              <tr key={suplier.id}>
                <th scope="row">{index + 1}</th>
                <td>{suplier.nama_suplier}</td>
                <td>{suplier.alamat_suplier}</td>
                <td>{suplier.telp_suplier}</td>
                <td>
                  <Link to={`edit/${suplier.id}`} className="btn btn-primary btn-sm">
                    Edit
                  </Link>

                  <button onClick={()=>dispatch(deleteSuplier(suplier.id))} type="button" className="btn btn-danger btn-sm">
                    hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
