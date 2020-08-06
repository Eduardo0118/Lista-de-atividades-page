import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

import Activity from "../../Activity";

import * as S from "./styled";

const ActivityView = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    findActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function findActivity() {
    const response = await api.get(`/atividades/${id}`);
    setActivity(response.data);
  }

  return (
    <>
      <Activity />
      <S.ViewWrapper>
        <S.ActivityTitle>{activity.title}</S.ActivityTitle>
        <S.ActivityDescription>{activity.description}</S.ActivityDescription>
      </S.ViewWrapper>
    </>
  );
};

export default ActivityView;
