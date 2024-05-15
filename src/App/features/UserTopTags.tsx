import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import CircleChart from "../../Components/CircleChart/CircleChart";
import { useEffect, useState } from "react";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/Services/Metrics.service";
import Skeleton from "react-loading-skeleton";

export default function UserTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

  useEffect(() => {
    MetricService
      .getTop3Tags()
      .then(setTopTags)
  }, [])

  if (!topTags.length)
    return (
      <UserTopTagsWrapper>
        <Skeleton height={88} width={88} circle={true} />
        <Skeleton height={88} width={88} circle={true} />
        <Skeleton height={88} width={88} circle={true} />
      </UserTopTagsWrapper>
    );

  return <UserTopTagsWrapper>
    {
      topTags.map((tag, i) => {
        return <CircleChart
          progress={tag.percentage}
          caption={tag.tagName}
          theme={i === 0 ? 'primary' : 'default'}
          key={tag.tagName}
          size={88}
        />
      })
    }
  </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  `