import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";
import { Row, Col } from "antd";
import "./Header.css";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { clearError, getAllColleges } from "../../../redux/actions/collegeActions";


function Header() {
  const dispatch = useDispatch();
  // const alert = useAlert();
  // console.log("hello");
  const {colleges,error} = useSelector(state => state.collegesList);
  const { branches} = useSelector(state => state.collegesList);

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearError());
    }
    dispatch(getAllColleges());
  }, [dispatch, error]);

console.log("hello");
  return (
    <>
      <div className="header d-flex justify-content-center ">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <div>
                <Heading as="h2" size="3xl" isTruncated>
                  <Link to="/"> Materials</Link>
                </Heading>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row justify="center" gutter={16} >
        { colleges?.colleges?.map((college) => {
          return (
            <Col lg={5} sm={24} xs={24} key={college.name} className="pt-2">
              <div className="college">
                <Button colorScheme="teal" className="college-btn " size="lg">
                  {college.name}
                </Button>
                <div className="college-content bs1 align-items-right ">
                  <Heading
                    as="h3"
                    size="lg"
                    className=" d-flex align-items-right Branch_heading"
                  >
                    hello
                  </Heading>

                  {/* {college.branches.map((branch) => {
                    return (
                      <div className="m-2">
                        <Heading as="h5" size="sm" className="branch">
                          <Link to={`/${college.name}/${branch}`}>
                            {branch}
                          </Link>
                        </Heading>
                      </div>
                    );
                  })} */}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Header;
