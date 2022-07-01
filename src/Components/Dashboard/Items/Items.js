import React, { useEffect, useState } from "react";
import "./Items.css";
import { useQuery } from "react-query";
import Spinner from "../../Spinner/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Items = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const { isLoading, error, data, refetch } = useQuery("InfoData", () =>
    fetch(`https://power-hack-26.herokuapp.com/billing-list?page=${page}&size=${size}`).then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    fetch("https://power-hack-26.herokuapp.com/billing-list-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return toast.error("Please Wait a Moment");
  }

  const handleDeleteItem = id => {
    swal({
      title: "Are You Sure You Want to Delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://power-hack-26.herokuapp.com/delete-billing/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            swal({
              title: "Bill Successfully Deleted",
              icon: "success",
            });
          });
      } else {
        swal({
          title: "Your Billing File is Safe!",
          icon: "info",
        });
      }
    });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th>Billing Id</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Paid Amount</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <>
                  <tr>
                    <th>{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>${item.amount}</td>
                    <td>
                      <Link
                        to={`/dashboard/${item._id}`}
                        class="btn btn-primary btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(item._id)}
                        class="btn btn-secondary btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" flex justify-center my-8">
        <div className="paginationBtn">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}

          <select
            className="selectOption"
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Items;
