import { useEffect, useState } from "react";
import Chart, { ChartProps } from "../../Components/Chart/Chart";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePerformance from "../../Core/Hooks/usePerformance";

function UserPerformance() {
  /* const [editorEarnings, setEditorEarings] = useState<ChartProps['data']>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricsService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setEditorEarings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, []) */

  const { fetchPerformance, performance } = usePerformance();

  useEffect(() => {
    fetchPerformance();
  },[fetchPerformance])

  if (!performance)
    return <div>
      <Skeleton height={227} />
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses" 
    data={performance || <Skeleton />}
  />
}

export default UserPerformance