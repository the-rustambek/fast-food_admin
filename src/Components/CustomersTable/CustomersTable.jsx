import  { useEffect, useState } from "react";
import "./CustomersTable.css";
import  "../Toggle/Toggle.css";
import Delete from "../../Assets/Images/delete.png";
import CustomerService from "../../services/CustomersServise"
import constants from "../../configs/constants";


import Modal from "../Modal/Modal";
const CustomersTable = (props) =>{ 
  

    // useEffect(() =>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => setData(data))
    // },[])
    const [deleteModal,setDeleteModal] = useState(false);
    
    function openDeleteModal(){
        setDeleteModal(!deleteModal);
    }

return (
<section className="tables">
    <div className="tbl-header">
        <table>
            <thead>
                <tr>
                    <th className="th th-id">ID</th>
                    <th className="th th-left">Sana</th>
                    <th className="th  th-left">Telefon Raqami</th>
                    <th className="th th-left ">Qayta Aloqa</th>
                    <th className="th th-left"></th>
                </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table>
            <tbody> 
             
                    <tr className="tr"   >
                    <td className="td td-id">1</td>
                    <td className="td">g</td>
                    <td className="td">g</td>
                    <td className="td th-toggle">
                    <div className="toggle">

                    <input type="checkbox"   />
                        <label className="toggle-label"  >Toggle</label> 
                    </div></td>
                            
                            <td className="td td-right">
                                <button className="delete-btn"   onClick={() => openDeleteModal()}>
                                    <img src={Delete} alt="" /> 
                                </button>

                                
                            <Modal show={deleteModal} w={400} mh={120}>
                                    <div className="delete-box">
                                        <h2 className="delete-title">
                                            Haqiqatdan ham o'chirmoqchimisiz ? 
                                        </h2>
                                        <div className="delete-footer">
                                <button className="delete-no" onClick={()=>openDeleteModal()}>
                                    Yo'q
                                </button>
                                <button className="delete-yes"   type="submit">
                                    Ha
                                </button>
                            </div>

                        </div>
                    </Modal>
                            </td>

                </tr>
                         

        
            </tbody>
        </table>

    </div>


                   


</section>

)
}

export default CustomersTable;