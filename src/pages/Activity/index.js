import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import * as S from "./styled";

const Activity = () => {
  const [activitys, setActivitys] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadActivity();
  }, []);

  async function loadActivity() {
    const response = await api.get("/atividades");
    setActivitys(response.data);
  }

  function viewActivity(id) {
    history.push(`/atividades/${id}`);
  }

  return (
    <S.ActivityWrapper>
      {activitys.map((activity) => (
        <S.ActivityTitle
          key={activity.id}
          onClick={() => viewActivity(activity.id)}
          to={`/atividades/${activity.id}`}
        >
          <S.ActivityIcon /> {activity.title}
        </S.ActivityTitle>
      ))}
    </S.ActivityWrapper>
  );
};

export default Activity;
