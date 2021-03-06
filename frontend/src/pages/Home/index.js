import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDataBlog } from "../../config/redux/action";
import "./home.scss";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";

function Home() {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const history = useHistory();

  const previus = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Apakah anda yakin untuk menghapus?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then((res) => {
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log("err", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("blog tidak terhapus"),
        },
      ],
    });
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create BLog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previus" onClick={previus} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap height={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
}

export default Home;
