import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "antd";
import { Heading } from "@chakra-ui/react";
import { Button } from "antd";
import "./CollegeBranch.css";

function CollegeBranch() {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const { branch } = useParams();
  const { college } = useParams();

  return (
    <div>
      <Heading className="heading" style={{ margin: "revert" }}>
        {college}-{branch}
      </Heading>

      {/* {semesters.map(semester => {
                return <div>
                    <Card title={`semester ${semester}`} className="card" style={
                        { width: 400, margin: "auto", marginBottom: "5vh" }

                    }>
                        <Button type="primary" style={{ marginRight: "45px" }}>cource</Button>
                        <Button type="primary" style={{ marginRight: "45px" }}>Time-table</Button>
                        <Button type="primary">papers</Button>
                    </Card>
                </div>
            })} */}

      {semesters.map(semester => {
        return (
          <div className="card">
            <Heading as="h3" size="lg">{`Semester - ${semester}`}</Heading>
            <hr />
            <div className="container">
              <button className="btn1 btn">
                <Link to={`/${college}/${branch}/${semester}/course`}>
                  course
                </Link>
              </button>
              <button className="btn2 btn">
                <Link to={`/${college}/${branch}/${semester}/timeTable`}>
                  Time-Table
                </Link>
              </button>
              <button className="btn3 btn">
                <Link to={`/${college}/${branch}/${semester}/Papers`}>
                  Papers
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CollegeBranch;
